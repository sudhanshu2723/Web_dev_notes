  // 

import { useState } from 'react';
import { homeAtom, jobsAtom, messegingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms';
import {useRecoilValue} from 'recoil'

function App() {
   
    

     const home=useRecoilValue(homeAtom)
     const network=useRecoilValue(networkAtom)
     const jobs=useRecoilValue(jobsAtom)
     const messeging=useRecoilValue(messegingAtom)
     const notification=useRecoilValue(notificationAtom)
     const totalNotification=useRecoilValue(totalNotificationSelector)
  return (
   <div>
    <button>Home {home}</button>
    <button>My Network {network} </button>
    <button>Jobs {jobs} </button>
    <button>Messaging {messeging} </button>
    <button>Notifications {notification} </button>
    <button>Me {totalNotification} </button>
   </div>
  );
}

export default App;
