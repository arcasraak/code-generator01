import React, { useState, createContext } from 'react';

export const ContentFirebase = createContext();

export const ContentFirebaseContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [variable, setVariable] = useState('');
  const [myKey, setMyKey] = useState('');
  const [type, setType] = useState('');
  const [rangeType, setRangeType] = useState('');
  const [range, setRange] = useState('');
  const [range2, setRange2] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [ownerSelector, setOwnerSelector] = useState('');
  const [onlyOwnerGetAccess, setOnlyOwnerGetAccess] = useState(false);
  const [collectionName, setCollectionName] = useState('');
  const [actions, setActions] = useState([
    { title: 'read', checked: false },
    { title: 'create', checked: false },
    { title: 'update', checked: false },
    { title: 'delete', checked: false },
  ]);
  const [hasRateLimit, setHasRateLimit] = useState(false);
  const [rateLimit, setRateLimit] = useState('');
  const [hasAllKeys, setHasAllKeys] = useState(false);
  const [createdDateSelector, setCreatedDateSelector] = useState('');

  return (
    <ContentFirebase.Provider
      value={{
        items,
        setItems,
        variable,
        setVariable,
        myKey,
        setMyKey,
        type,
        setType,
        rangeType,
        setRangeType,
        range,
        setRange,
        range2,
        setRange2,
        isRequired,
        setIsRequired,
        ownerSelector,
        setOwnerSelector,
        onlyOwnerGetAccess,
        setOnlyOwnerGetAccess,
        actions,
        setActions,
        collectionName,
        setCollectionName,
        hasRateLimit,
        setHasRateLimit,
        rateLimit,
        setRateLimit,
        hasAllKeys,
        setHasAllKeys,
        createdDateSelector,
        setCreatedDateSelector,
      }}
    >
      {children}
    </ContentFirebase.Provider>
  );
};

export default ContentFirebaseContext;
