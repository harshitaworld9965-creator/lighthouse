import "./Scene.css";

export default function Scene() {
    const stars = Array.from({length:80}, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60,
        size: Math.random() *1.6 + 0.6,
        delay: Math.random()*4,
    }))

    return (
        <div className="scene" aria-hidden="true">
            <div className="scene__sky">
                {stars.map((s) => (
                    <span
                    key={s.id}
                    className="star"
                    style={{
                        '--x':`${s.x}%`,
                        '--y':`${s.y}%`,
                        '--size': `${s.size}px`,
                        '--delay': `${s.delay}s`,

                    }}
                    />
                ))}
                <div className="moon" />
            </div>

            <div className="scene__sea">
                <div className="wave wave--back"/>
                <div className="wave wave--front" />
            </div>

            <div className="scene__rock"/>

            <div className="tower">
                <div className="tower__lantern">
                    <div className="tower__lamp"/>
                    <div className="tower__beam"/>
                </div>

                <div className="tower__body"/>
                <div className="tower__base"/>
            </div>
        </div>
    )
}