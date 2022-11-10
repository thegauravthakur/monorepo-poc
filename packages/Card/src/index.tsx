interface CardProps {
    text: string;
}

export function Card({ text = 'Card Text' }: CardProps) {
    return (
        <div>
            <h1>This is a Card.</h1>
            <h1>{text}</h1>
        </div>
    );
}
