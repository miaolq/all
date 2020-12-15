1. createElementWithValidation{
   isValidElementType
   createElement{
   ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
   }
   }


render{
    legacyRenderSubtreeIntoContainer
}

FiberRootNode

FiberNode


computeExpirationForFiber
requestCurrentTimeForUpdate

enqueueUpdate
updateQueue

scheduleWork



##
legacyCreateRootFromDOMContainer
ReactDOMBlockingRoot{
    _internalRoot:fiberRoot
}
创建element，
createLegacyRoot创建fiberRootNode （container）
    container.current => 首个fiberNode,通过createHostRootFiber创建
updateContainer =》 

stateNode


```ts

updateContainer(reactElement, fiberRoot)
enqueueUpdate(current$1, update); // fiberNode    {element:reactElement}
将update挂载到fiberNode.updateQueue.shared.pending
scheduleUpdateOnFiber(fiberNode,expirTime)

export function createFiberRoot(
  containerInfo: any,
  tag: RootTag,
  hydrate: boolean,
  hydrationCallbacks: null | SuspenseHydrationCallbacks,
): FiberRoot {
  const root: FiberRoot = (new FiberRootNode(containerInfo, tag, hydrate): any);
  if (enableSuspenseCallback) {
    root.hydrationCallbacks = hydrationCallbacks;
  }

  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  const uninitializedFiber = createHostRootFiber(tag);
  root.current = uninitializedFiber;   // toknow
  uninitializedFiber.stateNode = root;  // toknow

  initializeUpdateQueue(uninitializedFiber);

  return root;
}
```