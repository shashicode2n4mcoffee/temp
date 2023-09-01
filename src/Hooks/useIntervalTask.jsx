import { useEffect } from 'react'

function useIntervalTask(taskFunction, interval, param) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      taskFunction(param)
    }, interval)
    return () => clearInterval(intervalId)
  }, [taskFunction, interval])
}

export default useIntervalTask
