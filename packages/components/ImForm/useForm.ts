import { ref, provide, reactive, inject, computed, watch } from 'vue';
import type {
  FormProps,
  FormItemProps,
  ruleItem,
  FormValidateResult,
} from './types';
import { isNumber, isObject, isString } from '@/utils/types';
import { getSizeValue, debounce } from '@/utils';

const PROVIDE_KEY = Symbol('im-form');

// 验证对象的每一个属性是否合法。
async function checkItem(value: string | number, obj: ruleItem) {
  const { message, min, max, maxLength, minLength, validator, required } = obj;

  const getMsg = () => {
    return message || `This is a required field.`;
  };
  if (typeof validator === 'function') {
    return await validator(value);
  }
  if (isString(value) && minLength && maxLength) {
    const len = String(value).length;
    return len >= minLength && len <= maxLength ? '' : getMsg();
  }
  // 判断是否是数字
  if (isNumber(min) && isNumber(max)) {
    const num = Number(value);
    return num >= Number(min) && num <= Number(max) ? '' : getMsg();
  } else if (isNumber(min) || isNumber(max)) {
    if (isNumber(min)) {
      const num = Number(value);
      return num >= Number(min) ? '' : getMsg();
    } else if (isNumber(max)) {
      const num = Number(value);
      return num <= Number(max) ? '' : getMsg();
    }
  }
  if (required) {
    return value === '' || value === undefined ? getMsg() : '';
  }
  return false;
}

async function checkValue(value: any, rule: ruleItem[] | ruleItem) {
  if (rule) {
    if (Array.isArray(rule)) {
      for (const ruleItem of rule) {
        const msg = await checkItem(value, ruleItem);
        if (msg) return msg;
      }
      return '';
    }
    if (isObject(rule)) {
      return await checkItem(value, rule as ruleItem);
    }
    return '';
  }
  return '';
}

export const useForm = (props: FormProps) => {
  const formRef = ref<HTMLFormElement>();
  const errors = reactive<Record<string, any>>({});
  const rules = reactive<Record<string, any>>({ ...(props.rules || {}) });
  const resetForm = { ...(props.modelValue || {}) };
  let resetState = false;

  provide(PROVIDE_KEY, {
    setRule: (prop: string, validate: any) => {
      rules[prop] = validate;
    },
    errors,
    // 布局字段传入
    labelWidth: () => props.labelWidth,
    labelPosition: () => props.labelPosition,
    model: props.modelValue,
    validateProp,
  });

  function validate(
    callback?: (valid: FormValidateResult) => void
  ): Promise<FormValidateResult> {
    return new Promise(async (resolve, reject) => {
      try {
        for (const key in rules) {
          await validateProp(key);
        }
        const status = Object.values(errors).every((item) => item === '');
        const message = { ...errors };
        const result = { ...props.modelValue };
        if (typeof callback === 'function') {
          callback({
            status,
            result,
            message,
          });
        }
        resolve({
          status,
          result,
          message,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  // 重置
  function reset(prop: string | undefined | Array<string> = '') {
    resetState = true;
    if (prop) {
      if (Array.isArray(prop)) {
        for (const key of prop) {
          errors[key] = '';
          props.modelValue[key] = resetForm[key];
        }
      } else {
        errors[prop] = '';
        props.modelValue[prop] = resetForm[prop];
      }
    } else {
      for (const key in errors) {
        errors[key] = '';
      }
      Object.keys(props.modelValue).forEach((key) => {
        props.modelValue[key] = resetForm[key];
      });
    }
    setTimeout(() => {
      resetState = false;
    }, 100);
  }
  async function validateProp(prop: string) {
    if (resetState) return;
    const rule = rules[prop];
    if (rule && prop) {
      errors[prop] = await checkValue(props.modelValue[prop], rule);
    } else {
      errors[prop] = '';
    }
  }

  return {
    formRef,
    validate,
    reset,
  };
};

export const useFormItem = (props: FormItemProps) => {
  const formContext = inject(PROVIDE_KEY, {
    errors: {} as any,
    setRule: (prop: string, rule: any) => {},
    labelWidth: () => '',
    labelPosition: () => '',
    model: {} as any,
    validateProp: (prop: string) => {},
  });

  // 控制布局
  const className = computed(() => {
    const d = formContext.labelPosition();

    return `im-form__item--${props.labelPosition || d || 'right'}`;
  });

  // 校验信息内容，用于显示表单项的校验信息。
  const message = computed(() => {
    if (!props.showMessage || !props.prop) return '';

    try {
      return formContext.errors[props.prop];
    } catch (error) {
      return '';
    }
  });

  // 样式变量，用于控制表单项的样式。
  const formItemStyles = computed(() => {
    const flag = message.value ? true : false;

    return {
      '--im-form-message-color': flag
        ? `var(--im-error-color-8)`
        : 'var(--im-error-color-8)',
      '--im-form-state-bg-color': flag ? `var(--im-error-color-1)` : '',
      '--im-form-label-width':
        getSizeValue(props.labelWidth || formContext.labelWidth()) || '',
    };
  });

  const debounceValidate = debounce(formContext.validateProp, 50);

  watch(
    () => props.prop,
    () => {
      if (props.prop && props.rules) {
        try {
          formContext.setRule(props.prop, props.rules);
        } catch (error) {
          console.error(error);
        }
      }
    },
    { immediate: true }
  );

  watch(
    () => formContext.model[props.prop],
    () => {
      debounceValidate(props.prop);
    }
  );

  return {
    message,
    formItemStyles,
    className,
  };
};
