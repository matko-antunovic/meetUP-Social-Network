export const userDetailedQuery = ({ auth, userUid }) => {
    if (userUid !== null) {
      return [
        {
          collection: 'users',
          doc: userUid,
          storeAs: 'profile'
        },
        {
          collection: 'users',
          doc: userUid,
         
        }
      ];
    } else {
      return [
        {
          collection: 'users',
          doc: auth.uid,
          
        }
      ];
    }
  };