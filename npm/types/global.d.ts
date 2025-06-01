declare module 'vue' {
  type ImComponents = typeof import('im-design');
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ImButton: ImComponents['ImButton'];
    ImRow: ImComponents['ImRow'];
    ImCol: ImComponents['ImCol'];
    ImDivider: ImComponents['ImDivider'];
    ImIcon: ImComponents['ImIcon'];
  }

  interface ComponentCustomProperties {
    // $message: typeof ImComponents['ImMessage'];
  }
}

export {};
