import React from 'react'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const User = () => {
  return (
    <div>User</div>
  )
}

export default User