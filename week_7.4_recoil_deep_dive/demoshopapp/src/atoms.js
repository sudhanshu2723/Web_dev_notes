import {atom,selector} from 'recoil'


export const networkAtom=atom({
    key:"networkAtom",
    default:123
})

export const homeAtom=atom({
    key:"homeAtom",
    default:453
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:832
})

export const messegingAtom=atom({
    key:"messegingAtom",
    default:928
})

export const notificationAtom=atom({
    key:"notificationAtom",
    default:123
})

export const totalNotificationSelector=selector({
     key:"totalNotificationSelector",
     get:({get})=>{
        const network=get(networkAtom)
        const home=get(homeAtom)
        const jobs=get(jobsAtom)
        const messeging=get(messegingAtom)
        const notification=get(notificationAtom)
        const total=network+home+jobs+messeging+notification
        return total
     }
    
})