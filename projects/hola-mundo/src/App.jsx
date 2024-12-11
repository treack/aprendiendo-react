import './App.css'
import {TwiiterFollowCard} from './TwiiterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'ivanquintero',
        name: 'Iván Quintero',
        isFollowing: false
    }
    
]

export function App() {   
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwiiterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwiiterFollowCard>
                ))
            }
        </section>
    )
}