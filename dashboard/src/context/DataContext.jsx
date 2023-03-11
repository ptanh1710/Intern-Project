import React, { createContext, useState, useEffect, useMemo } from 'react';

export const DataContext = createContext({});

export default function DataProvider({ children }) {
    const values = {};

    return (
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    );
}
