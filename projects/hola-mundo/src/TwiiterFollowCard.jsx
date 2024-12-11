import {useState} from 'react'

export function TwiiterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text  = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonclassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleclick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="El avatar" src={'https://unavatar.io/' + userName} />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonclassName} onClick={handleclick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    
    )
}