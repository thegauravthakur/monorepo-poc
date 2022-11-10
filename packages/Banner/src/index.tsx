interface BannerProps {
    text: string;
}
export function Banner({ text }: BannerProps) {
    return (
        <div>
            <h1>This is a banner</h1>
            <h1>{text}</h1>
        </div>
    );
}
