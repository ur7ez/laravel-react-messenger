import React from "react";

export const EventBusContext = React.createContext();
export const EventBusProvider = ({children}) => {
    const [events, setEvents] = React.useState({});

    const emit = (name, data) => {
        if (events[name]) {
            for (let cb of events[name]) {
                cb(data);
            }
        }
    };

    const on = (name, cb) => {
        if (!events[name]) {
            events[name] = [];
        }
        events[name].push(cb);

        // function to stop listening to that event
        return () => {
            // clear the callback from the given event name:
            events[name] = events[name].filter((callback) => callback !== cb);
        };
    };

    return (
        <EventBusContext.Provider value={{emit, on}}>
            {children}
        </EventBusContext.Provider>
    );
};

export const useEventBus = () => {
    return React.useContext(EventBusContext);
}
