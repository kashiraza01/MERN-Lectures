import { useState, useEffect, use } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const hello = "Hello from custom hook";

export const useCustomHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName, printName] = useLocalStorage("name", "Kashif Raza");
    useEffect(() => {
        console.log("Count has been updated:", count);
    }, [count]);

    const arr = [];
    const [arrayStored, setArrayStored] = useLocalStorage("array", []);

    const [randomNumber, setRandomNumber] = useLocalStorage("randomNumber",
    () => {
        return Math.floor(Math.random() * 100);
    }
);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        const newArray = [...arrayStored, count + 1];
        setArrayStored(newArray);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        const newArray = arrayStored.slice(0, -1);
        setArrayStored(newArray);
    }

    useEffect(() => {
        console.log("Component mounted");
        setRandomNumber(Math.floor(Math.random() * 1000));
        setArrayStored(arr);
        console.log("Initial random number:", randomNumber);
        return () => {
            console.log("Cleaning up...");
            console.log("Component unmounted");
        }
    }, []);

    useEffect(() => {
        console.log("Name has been updated:", printName());
    }, [name]);

    useEffect(() => {
        console.log("Array has been updated:", arrayStored);
        
    }, [arrayStored]);

    const handleSetName = (newName) => {
        try {
            if (typeof newName !== "string") {
                throw new Error("Name must be a string");
            }
            if(newName.trim() === "") {
                throw new Error("Name cannot be empty");
            }
            if(newName.match(/[^a-zA-Z\s]/)) {
                throw new Error("Name cannot contain special characters or numbers or z");
            }
            setName(newName);
        } catch (error) {            
            console.log("Error setting name:", error);
        }
    }


    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={(e) => handleSetName(e.target.value)} />
        </>
    )   
}

