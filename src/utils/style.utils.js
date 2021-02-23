export const setStateMethods = setState => ({
  activate: () => setState(true),
  desactivate: () => setState(false)
});