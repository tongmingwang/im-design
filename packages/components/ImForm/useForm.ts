import {
  ref,
  provide,
  reactive,
  inject,
  computed,
  watch,
  onMounted,
} from 'vue';
import type { FormProps, FormItemProps, ruleItem } from './types';
import { hasBorder } from '@/utils/dom';
import { isObject, isString } from '@/utils/types';

const provideKey = Symbol('im-form');
const formKey = 'data-im-has-border';

// 验证对象的每一个属性是否合法。
function checkItem(value: string | number, obj: ruleItem) {
  const { message, min, max, maxLength, minLength, validator } = obj;

  if (isString(value) && minLength && maxLength) {
    const len = String(value).length;
    return len >= minLength && len <= maxLength ? '' : message;
  }

  console.log('checkItem', obj);
}

// 校验表单数据是否合法，然后更新表单状态。
async function checkValue(value: any, rule: Function | ruleItem[] | ruleItem) {
  console.log(rule, 'rule');

  if (rule) {
    // 判断rule的类型，如果是函数就直接执行，如果不是就返回一个空数组。
    if (typeof rule === 'function') {
      const result = await rule(value);
      return result;
    }
    // 如果是数组，就遍历执行每一个校验函数。
    if (Array.isArray(rule)) {
      for (const ruleItem of rule) {
        // 执行每一个校验函数，如果有一个校验失败就返回。
        const msg = await checkItem(value, ruleItem);
        if (msg) {
          console.log(msg);
        }
      }
    }

    // 如果是对象
    if (isObject(rule)) {
      await checkItem(value, rule as ruleItem);
    }
    return;
  }

  return;
}

export const useForm = (props: FormProps) => {
  const formRef = ref<HTMLFormElement>();
  const errors = reactive<Record<string, any>>({});
  const rules = reactive<Record<string, any>>({ ...(props.rules || {}) });
  // form 有数据和验证规则，变化是验证一下表单数据是否合法，然后更新表单状态。
  provide(provideKey, {
    getError: (prop: string) => {
      console.log(prop, 'prop');
      return errors[prop] || '';
    },
    getErrors: () => errors,
    // 设置表单校验规则
    setRule: (prop: string, validate: any) => {
      rules[prop] = validate;
    },
  });

  function validate(callback?: (valid: boolean) => void): Promise<void> {
    // 校验表单数据是否合法，然后更新表单状态。
    return new Promise(async (resolve, reject) => {
      console.log('validate', props.modelValue, rules);
      for (const key in rules) {
        const rule = rules[key];
        // 直接传入到一个校验函数中去执行，校验结果更新到 errors 中。
        const msg = await checkValue(props.modelValue[key], rule);
      }
    });
  }

  return {
    formRef,
    validate,
  };
};

export const useFormItem = (props: FormItemProps) => {
  const contentRef = ref<HTMLElement>();
  const formContext = inject(provideKey, {
    getError: (prop: string) => {},
    setRule: (prop: string, validate: any) => {},
  });
  const error = computed(() => formContext.getError(props.prop));
  onMounted(() => {
    if (props.rules && props.prop) {
      formContext.setRule(props.prop, props.rules);
    }
  });
  return {
    error,
    contentRef,
  };
};
