export default function <StateSlice, Actions>(
    defaultState: StateSlice,
    handlers: {
        [k: string]: (
            state: StateSlice,
            action: Actions,
            ...rest: any[]
        ) => StateSlice
    },
    key = 'type',
    context = handlers
): (state: Readonly<StateSlice>, action: Actions) => Readonly<StateSlice> {
    return function reduce(state = defaultState, action, ...rest): StateSlice {
        const handler = handlers[action[key]]
        return handler
            ? handler.apply(context, [state, action, ...rest])
            : state
    }
}
