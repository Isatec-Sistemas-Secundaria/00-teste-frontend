import logoMonochrome from './logo_monocrome.webp';

interface IsatecLogoProps {
    size?: number;
}

export function IsatecLogo({ size = 64 }: IsatecLogoProps) {
    return (
        <div
            style={{ width: size, height: size }}
            className="rounded-full bg-primary dark:bg-transparent flex items-center justify-center"
        >
            <img
                src={logoMonochrome}
                alt="Isatec"
                style={{ width: size * 0.75, height: size * 0.75 }}
                className="object-contain"
            />
        </div>
    );
}
