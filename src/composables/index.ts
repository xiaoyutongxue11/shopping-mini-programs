import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'
export const useXtxGuess = () => {
  const XtxGuessRef = ref<XtxGuessInstance>()
  const onScrollToLower = () => {
    XtxGuessRef.value?.getMore()
  }

  return {
    XtxGuessRef,
    onScrollToLower,
  }
}
