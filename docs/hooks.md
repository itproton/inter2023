
# Hooks
> code reuse functions to manage component LC and state
- >16.8
## Few unconnected problems:
- REUSE stateful logic (HOC-nesting-hell, rendeProps spagetti, hierarchy)
- split into small ISOLATED-function-units (vs LC that hard to follow (splitted add/removeListener)) - custom-hooks
- custom hooks -> functtional composition
## Rules:
- only TOP-function level (hook is bound to comp-instance)
- convention prefix `useHook`

## VS LC
> https://wattenberger.com/blog/react-hooks

## [state, dispatch] = useReducer(reducer, initialState, () => {foo: 'bar'}) 
> complex state, dependency on previous

## useCallback(() => someValue, [someValue])
- trasform fresh function into reference
- wrap event-handler to avoid re-creating even memoized SIBLING comp
-  memoized callback (react saves ref to func and pass it as prop to next)

## useMemo
- memos RESULT, not entire function. Depends on function parameters!
- `React.memo` (PureComponent for functional) - don't rerender if props not changed (but not new function as handler)
- ` const someValue = useMemo(() => ({ value: "someValue" }))`
- useMemo replaces useEffect to build sync-dependencies
  ```ts
  const data = useMemo(() => (
    getDataWithinRange(dateRange)
  ), [dateRange])
  const dimensions = useMemo(getDimensions, [margins])
  const xScale = useMemo(getXScale, [data, dimensions])
  const yScale = useMemo(getYScale, [data, dimensions])
  ```
## React.memo (not a hook)
```ts
React.memo( (props)=> <>, (nextProps, prevProps), prevProps.isOpen != nextProps.isOpen)
```

## ref = useRef(initValue)
> `initValue` persist in mutable "ref-box" `ref.current` for lifetime of comp
Use:
- access **child IMPERATIVELY**, keep mutable value around
- **instace-class-var**, not only DOM `<div ref={myRef}`
- does't notify about change(no re-render)
- modify refs in handlers/effects
  
? Diff from `ref = {current:initialValue}`
> we get same ref on every render

## useEffect
Effects:
- fetching, subs
- AFTER layout and paint, render commited to screen (nothing blocks render)

Dependency:
1. undefined - evrry render
2. [] - on mount
3. prop - on props change

## useLayoutEffect
- BEFORE layout/paint
- visual change to DOM as side effect (avoid flickering)

## useContext
- context - <s>global</s> SHARED data across multi-comps
``` ts
const ThemeCtx = React.createContext('foo')
// down the tree
const theme = useContext(ThemeCtx)
```


# useCustomHooks
- another function(compose other hooks)
- retrurn one value or [valueSetValue]

# UnderTheHood
## Hooks
- ISOLATED local state within each component instance
- separate componente instances don't share state
- https://gist.github.com/gaearon/62866046e396f4de9b4827eae861ff19

 
```ts
let hooks = null;

export function useHook() {
  hooks.push(hookData); 
}

function reactInternalRenderAComponentMethod(component) {
  hooks = [];
  component();
  let hooksForThisComponent = hooks;
  hooks = null;
}
```

# Good Old Lifecycle

## render
> pure (no sideEffects)
- shouldCompUpdate stops it
- null/bool/portal/fragment/[]/JSX.Element

# CHECK_REPO
- https://usehooks.com/
- https://ahooks.js.org/hooks/use-request/index
- https://wattenberger.com/blog/react-hooks
