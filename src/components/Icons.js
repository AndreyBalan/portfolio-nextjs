import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}>
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 209"
        {...rest}
        className={`w-full h-auto ${className}`}>
        <path fill="none" d="M0 0h256v209H0z" />
        <path
            fill="#55acee"
            d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
        />
    </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}>
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);

export const FacebookIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 48 48"
        {...rest}>
        <linearGradient
            id="a"
            x1={9.993}
            x2={40.615}
            y1={9.993}
            y2={40.615}
            gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#2aa4f4" />
            <stop offset={1} stopColor="#007ad9" />
        </linearGradient>
        <path
            fill="url(#a)"
            d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
        />
        <path
            fill="#fff"
            d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283V12.46c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452c.98.146 1.973.246 2.992.246.921 0 1.82-.084 2.707-.204V29.301z"
        />
    </svg>
);

export const TelegramIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 48 48"
        {...rest}>
        <linearGradient
            id="a"
            x1={9.858}
            x2={38.142}
            y1={9.858}
            y2={38.142}
            gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#33bef0" />
            <stop offset={1} stopColor="#0a85d9" />
        </linearGradient>
        <path
            fill="url(#a)"
            d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
        />
        <path
            d="M10.119 23.466c8.155-3.695 17.733-7.704 19.208-8.284 3.252-1.279 4.67.028 4.448 2.113-.273 2.555-1.567 9.99-2.363 15.317-.466 3.117-2.154 4.072-4.059 2.863-1.445-.917-6.413-4.17-7.72-5.282-.891-.758-1.512-1.608-.88-2.474.185-.253.658-.763.921-1.017 1.319-1.278 1.141-1.553-.454-.412-.19.136-1.292.935-1.745 1.237-1.11.74-2.131.78-3.862.192-1.416-.481-2.776-.852-3.634-1.223-1.185-.513-1.639-2.224.14-3.03z"
            opacity={0.05}
        />
        <path
            d="M10.836 23.591c7.572-3.385 16.884-7.264 18.246-7.813 3.264-1.318 4.465-.536 4.114 2.011-.326 2.358-1.483 9.654-2.294 14.545-.478 2.879-1.874 3.513-3.692 2.337-1.139-.734-5.723-3.754-6.835-4.633-.86-.679-1.751-1.463-.71-2.598.348-.379 2.27-2.234 3.707-3.614.833-.801.536-1.196-.469-.508-1.843 1.263-4.858 3.262-5.396 3.625-1.025.69-1.988.856-3.664.329-1.321-.416-2.597-.819-3.262-1.078-1.486-.576-1.506-1.816.255-2.603z"
            opacity={0.07}
        />
        <path
            fill="#fff"
            d="M11.553 23.717c6.99-3.075 16.035-6.824 17.284-7.343 3.275-1.358 4.28-1.098 3.779 1.91-.36 2.162-1.398 9.319-2.226 13.774-.491 2.642-1.593 2.955-3.325 1.812-.833-.55-5.038-3.331-5.951-3.984-.833-.595-1.982-1.311-.541-2.721.513-.502 3.874-3.712 6.493-6.21.343-.328-.088-.867-.484-.604a3153.97 3153.97 0 0 0-9.047 6.013c-.941.639-1.845.932-3.467.466-1.226-.352-2.423-.772-2.889-.932-1.795-.616-1.369-1.414.374-2.181z"
        />
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}>
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2">
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0">
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}>
        <rect
            x="0"
            y="0"
            width="24"
            height="24"
            fill="rgba(255, 255, 255, 0)"
        />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2">
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2">
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0">
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

export const CircularText = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 200 200"
        className={`w-full h-auto ${className}`}
        {...rest}>
        <path d="M74.724 26.736c-2.63.963-4.833 1.815-4.87 1.926-.037.148 4.907 14.241 5.074 14.464.148.185 2.018-.704 1.963-.945-.037-.13-.482-1.444-1-2.889-.778-2.148-.908-2.685-.704-2.815.148-.092 1.722-.666 3.519-1.296 1.778-.63 3.296-1.204 3.37-1.278.167-.148-.389-1.685-.61-1.685-.075 0-1.65.537-3.52 1.204-1.87.666-3.463 1.185-3.574 1.148-.092-.037-.555-1.13-1.037-2.463-.852-2.37-.87-2.39-.481-2.593.222-.111 2.018-.76 4-1.463a534.051 534.051 0 0 0 3.685-1.315c.037-.037-.037-.444-.167-.907-.148-.556-.333-.834-.537-.815-.166 0-2.463.778-5.11 1.722zM97.799 26.384c-1.278.352-2.019.834-2.89 1.778-1.073 1.204-1.462 2.222-1.462 4 0 1.37.055 1.648.648 2.778 1.389 2.741 4.648 3.926 7.704 2.815 1.444-.537 3.019-2.111 3.482-3.482.462-1.425.314-3.666-.334-4.944-1.26-2.463-4.352-3.722-7.148-2.945zm3.852 2.278c1.166.704 1.778 1.945 1.76 3.556-.02 2.463-1.575 4.074-3.908 4.074-2.278-.018-3.945-1.778-3.945-4.185 0-3.26 3.315-5.13 6.093-3.445zM89.78 26.94c-1 .37-1.63.833-2.204 1.63l-.518.703-.13-.87-.13-.852-.925.093c-.5.074-.963.148-1 .203-.112.093 1.814 11.149 1.981 11.408.074.13 1.796-.093 1.982-.26.037-.018-.204-1.462-.5-3.184-.315-1.723-.556-3.426-.556-3.778.019-1.556 1.24-2.963 2.833-3.26l.704-.11-.13-.871c-.185-1.278-.203-1.297-1.407-.852zM109.373 26.977c-.055.185-.592 2.74-1.204 5.704-.814 3.907-1.055 5.407-.888 5.5.37.222 1.648.389 1.777.222.093-.092.426-1.5.76-3.13.685-3.388 1-4.259 1.833-4.963 1.87-1.574 5.093-.722 5.593 1.482.13.648.037 1.407-.574 4.444-.537 2.63-.686 3.686-.537 3.778.296.186 1.685.39 1.796.26.056-.056.407-1.612.796-3.463.852-4.038.908-5.482.297-6.649-1.112-2.11-4.667-3.13-6.982-1.981l-.907.463.11-.778.093-.778-.833-.222c-1.074-.26-1.019-.26-1.13.111zM125.54 29.384a23.644 23.644 0 0 1-.463 1.149c-.037.037-.389-.074-.815-.241-.407-.167-.833-.296-.925-.296-.223 0-.778 1.277-.649 1.481.037.074.445.278.908.445l.815.314-1.278 3.186c-1.37 3.407-1.574 4.185-1.39 5.222.279 1.482 2.223 2.76 4.057 2.648 1.037-.055 1.203-.259.981-1.185-.093-.352-.24-.444-.685-.444-.76 0-1.76-.445-2-.89-.111-.222-.204-.629-.204-.944 0-.648 2.352-6.685 2.611-6.685.093 0 .797.26 1.574.555.778.315 1.426.537 1.463.519.019-.037.167-.408.334-.815l.296-.778-1.574-.592c-.852-.334-1.556-.63-1.556-.648 0-.019.204-.556.482-1.186.26-.648.444-1.185.407-1.222-.148-.093-1.648-.648-1.796-.648-.093 0-.352.481-.593 1.055zM139.467 42.163c-2.575 3.222-4.704 5.963-4.723 6.11 0 .13 1.908 1.779 4.241 3.668l4.26 3.444.61-.648c.315-.37.593-.722.593-.796-.018-.093-1.592-1.39-3.518-2.926l-3.482-2.76.74-.944c.408-.5 1.093-1.37 1.52-1.908.407-.518.814-.963.907-.963.074 0 1.444 1.037 3.018 2.315 1.593 1.278 2.963 2.315 3.037 2.315.075 0 .37-.296.649-.667.426-.555.463-.703.259-.907-.148-.13-1.482-1.204-2.982-2.407-1.518-1.186-2.74-2.204-2.74-2.241 0-.167 2.814-3.593 2.963-3.593.074 0 1.63 1.204 3.444 2.685l3.315 2.686.426-.519c.87-1.037 1.037-.833-3.408-4.389-2.296-1.833-4.222-3.352-4.296-3.37-.074-.019-2.24 2.592-4.833 5.815zM130.189 39.07l-.37.722 2.48 1.408c1.353.759 2.556 1.388 2.649 1.388.111 0 .333-.333.518-.759.297-.648.315-.778.075-.926-.834-.537-4.63-2.574-4.778-2.574-.111 0-.37.333-.574.74zM51.964 44.07c-.815.963-1.222 1.945-1.222 2.908v.87l-.648-.63-.648-.63-.593.556a27.36 27.36 0 0 1-.778.667c-.092.074 1.649 2.037 3.852 4.389l4.037 4.278.815-.685.815-.686-.796-.852a136.928 136.928 0 0 0-2.315-2.426c-1.574-1.666-2.24-2.796-2.26-3.833 0-.815.39-1.685 1.056-2.37l.574-.556-.685-.796-.685-.797-.519.593zM65.298 45.385c-.37.296-.481.537-.481 1.074 0 1.815 2.537 2.056 2.888.278.075-.445 0-.685-.388-1.148-.593-.704-1.297-.778-2.019-.204zM149.337 52.718c-2.333 1.87-4.389 3.556-4.555 3.723-.297.296-.278.352.333 1.092l.648.778 2.74-2.185c1.5-1.204 3.02-2.278 3.353-2.39 1.426-.5 2.667-.147 3.76 1.057 1.221 1.351 1.37 2.426.555 3.685-.297.444-1.648 1.685-3.204 2.926-1.482 1.185-2.685 2.24-2.685 2.333 0 .315.907 1.426 1.166 1.445.13 0 1.093-.686 2.13-1.519 4.685-3.74 5.222-4.426 5.222-6.444 0-1.056-.092-1.352-.648-2.297-.981-1.63-2.704-2.889-3.981-2.889-.593 0-.593-.074.11-.704l.575-.518-.63-.76-.648-.759-4.24 3.426zM43.76 53.33c-2.092 1.055-3.296 3.018-3.277 5.37 0 1.13.092 1.574.5 2.37 1.5 2.89 4.759 4.26 7.592 3.186 1.926-.723 3.704-2.89 4.204-5.112.111-.481.148-1.11.093-1.407-.111-.481-.185-.518-.945-.518-.778 0-.815.037-.815.518 0 1.074-.574 2.463-1.351 3.315-.945 1.037-1.963 1.519-3.13 1.537-.815 0-1.815-.296-1.815-.537.018-.056 1.296-1.778 2.852-3.815l2.852-3.704-.482-.426c-1.018-.852-2.092-1.24-3.648-1.296-1.352-.056-1.574-.019-2.63.519zm3.63 1.5c.315.11.574.277.574.351 0 .112-3.74 5.149-4.407 5.927-.167.203-.945-1.038-1.148-1.815-.426-1.741.537-3.649 2.222-4.37.778-.334 1.944-.371 2.76-.093zM159.115 63.145c-1.148.24-2.944 1.259-3.648 2.092-.926 1.074-1.278 1.926-1.352 3.297-.148 2.463.982 4.592 2.982 5.61l1.074.556-.722.37-.741.39.444.87c.241.5.5.889.537.889.056 0 3.37-1.648 7.39-3.648l7.296-3.648-.445-.89c-.24-.48-.481-.888-.518-.888-.019 0-1.278.592-2.778 1.315-1.519.722-2.778 1.277-2.815 1.24-.037-.037.019-.407.13-.796.407-1.444-.278-3.611-1.593-5.056-1.24-1.37-3.389-2.074-5.24-1.703zm2.704 2.333c1.5.611 2.426 2.056 2.445 3.74 0 1.612-.778 2.742-2.5 3.612-2.482 1.24-5.278-.26-5.704-3.074-.445-2.815 3.037-5.426 5.759-4.278zM38.205 64.07c-1.834.37-3.612 1.945-4.315 3.852-.408 1.056-.445 2.593-.093 3.704l.148.445-.796-.408c-.426-.222-.796-.37-.833-.333-.019.037-.223.463-.426.944l-.39.89.964.425c.537.241 3.778 1.778 7.24 3.426 3.445 1.63 6.297 2.982 6.316 2.982.092 0 .889-1.852.815-1.926-.037-.037-1.241-.63-2.667-1.315l-2.593-1.24.778-.371c3-1.426 4.111-5.537 2.26-8.297-1.371-2-4.168-3.222-6.408-2.777zm3.148 2.649c1.889 1.11 2.556 2.778 1.944 4.833-.426 1.39-2.185 2.704-3.61 2.704-1.038 0-2.39-.611-3.223-1.463-1.926-1.982-1.426-4.963 1.037-6.24 1.167-.594 2.648-.538 3.852.166zM32.223 78.275c-1.222.444-2.796 2.092-3.315 3.463-.518 1.407-.574 3.185-.111 4.555.24.741.611 1.297 1.389 2.074.889.89 1.26 1.112 2.389 1.463 4.167 1.26 7.833-1.518 7.87-5.944.019-1.222-.055-1.556-.592-2.63-.685-1.407-1.556-2.204-3.148-2.852-1.26-.518-3.204-.574-4.482-.13zm3.926 2.166c1.537.649 2.389 1.908 2.389 3.537 0 1.667-.722 2.926-2.093 3.63-.907.463-2.759.463-3.759 0-.87-.407-1.833-1.37-2.111-2.111-.315-.796-.24-2.352.148-3.185.389-.87 1.482-1.89 2.204-2.056.278-.055.592-.13.685-.185.333-.111 1.907.111 2.537.37zM167.282 83.756l-7.093.945v.5c0 1.166.926 7.24 1.26 8.148.722 2.037 2.055 3.611 3.889 4.537.981.5 1.203.537 3.277.537 2.093 0 2.297-.037 3.427-.574 2.018-.963 3.092-2.111 3.851-4.167.649-1.759.667-2.87.149-6.833-.26-2-.482-3.722-.482-3.852 0-.333-.463-.278-8.278.76zm6.778 2.852c.722 4.63.445 6.315-1.278 8.037-1.222 1.241-2.352 1.686-4.24 1.686-1.575 0-2.76-.482-3.853-1.556-1.148-1.13-1.648-2.407-2.055-5.426-.204-1.426-.333-2.611-.315-2.648.056-.056 10.537-1.463 11.13-1.5.352-.019.426.13.611 1.407zM22.371 92.812c-.037.537-.056 1.019-.019 1.056.056.074 16.242 1.5 16.279 1.444.018-.018.092-.518.148-1.111l.13-1.056h-.52c-.277 0-3.888-.296-8.018-.648-4.13-.352-7.593-.648-7.704-.648-.13 0-.259.389-.296.963zM30.612 97.942c-1.722.592-3.167 2.055-3.593 3.611-.315 1.167-.13 3.574.352 4.5.63 1.222 1.445 2.037 2.593 2.593.926.444 1.278.518 2.722.518 2.056 0 3.222-.463 4.408-1.74 1.5-1.612 2.018-4.149 1.314-6.5-.314-1.075-1.185-2.482-1.61-2.649-.149-.055-.538.13-.89.408l-.61.518.518.667c1.463 1.907 1.389 4.611-.167 6.167-.685.666-1.667 1.166-1.889.944-.055-.074-.592-7.982-.611-9.074 0-.426-1.24-.426-2.537.037zm1.074 1.722c.093.26.444 7.315.352 7.408-.24.314-1.611-.297-2.334-1.037-1.425-1.408-1.555-3.39-.333-5.038.463-.63 2.204-1.61 2.315-1.333zM165.375 100.534c-2.334.76-3.797 2.5-4.26 5.038-.333 1.814.111 3.981 1.037 5.018.278.297.334.278 1-.148l.704-.481-.444-.852c-.241-.482-.5-1.26-.556-1.723-.222-1.666.796-3.833 2.13-4.5.74-.37 1.685-.518 1.685-.24 0 .11-.204 2.259-.463 4.759-.26 2.5-.463 4.556-.463 4.574 0 .204 2.889 0 3.63-.26 1.222-.406 2.833-2.036 3.278-3.295.426-1.26.407-3.149-.056-4.39-.444-1.203-1.76-2.555-3.037-3.13-.982-.425-3.37-.647-4.185-.37zm4.296 2.723c1.204.778 1.76 2.315 1.445 3.907-.278 1.315-1.37 2.482-2.593 2.797-.463.11-.889.148-.945.074-.055-.074.037-1.5.223-3.186.185-1.685.333-3.333.333-3.666.019-.556.056-.611.444-.5.223.074.723.333 1.093.574zM27.686 112.238c.148.519.296.982.333 1.019.037.056 2.278.463 4.945.907 2.685.463 4.907.87 4.944.908.056.037-1.648 1.389-3.777 3-2.112 1.593-3.927 2.963-4 3.056-.204.148.24 2.24.444 2.166.074-.037 2.352-1.759 5.056-3.852 5.259-4.055 5.092-3.87 4.685-5.259l-.222-.74-5.741-.964c-3.167-.537-6-1.037-6.334-1.092l-.574-.112.24.963zM165.06 115.183c-2.963.37-5.519.74-5.648.796-.315.111-.815 1.945-.593 2.167.37.352 9.611 8.13 9.63 8.093.018-.019.166-.463.315-1l.277-.945-3.889-3.296c-2.148-1.815-3.833-3.315-3.74-3.352.092-.019 2.333-.296 4.981-.611 2.648-.315 4.87-.63 4.926-.704.167-.185.537-1.333.537-1.63 0-.37-.592-.314-6.796.482zM40.094 122.257c-.297.741-.297.797 0 .982 1.63.944 2.37 1.944 2.703 3.61.167.779.167 1.223 0 1.816-.24.852-1.463 2.37-1.703 2.13-.074-.075-.945-1.908-1.926-4.038-1-2.148-1.87-4.037-1.963-4.222-.167-.296-.223-.296-.945.074-1.778.908-3.074 2.648-3.389 4.556-.259 1.63.834 4.26 2.241 5.333 1.278.963 2.204 1.26 3.852 1.167 2.352-.13 4.148-1.204 5.222-3.148.482-.89.537-1.148.537-2.649 0-1.481-.055-1.796-.574-2.87-.852-1.796-2.037-3.019-3.333-3.407-.333-.112-.445 0-.722.666zm-1.963 5.89c.851 1.833 1.5 3.407 1.426 3.462-.074.074-.556.13-1.093.13-2.593-.019-4.445-2.648-3.537-5.037.315-.834 1.148-1.89 1.5-1.89.092 0 .852 1.5 1.704 3.334zM157.912 124.72c-2.612 1-4.649 4.278-4.334 6.963.074.537.185 1.037.278 1.13.092.093.481.093.889 0l.722-.148v-1.37c.019-1.13.111-1.575.5-2.334.537-1.037 1.37-1.833 2.315-2.24.667-.26 2.056-.316 2.426-.093.167.13-.315 1.203-1.908 4.296-1.166 2.278-2.13 4.204-2.13 4.278 0 .056.445.315.982.556.76.351 1.297.444 2.537.444 1.408 0 1.686-.056 2.556-.537 1.796-1 2.963-2.87 3.13-5 .24-3.167-2.537-6.056-5.963-6.167-.778-.037-1.575.056-2 .222zm5.518 3.76c1.778 2.685-.555 6.352-3.74 5.87-.445-.055-.797-.185-.76-.278.037-.074.815-1.61 1.722-3.389 1.834-3.574 1.852-3.592 2.778-2.203zM43.334 134.369c-3.592.963-6.24 4.685-5.815 8.111.149 1.167.723 2.74 1.352 3.74.26.408 1.445 1.964 2.593 3.464l2.13 2.704 1.11-.89c.63-.48 3.334-2.61 6.038-4.722 2.704-2.11 4.926-3.907 4.963-3.963.056-.185-4.204-5.574-5.111-6.444-2.019-1.945-4.722-2.686-7.26-2zm3.87 2.203c1.297.445 2.316 1.334 3.983 3.426.87 1.093 1.592 2.075 1.592 2.186 0 .11-1.685 1.5-3.74 3.11a1823.263 1823.263 0 0 0-4.538 3.538l-.76.63-1.684-2.186c-1.89-2.444-2.426-3.61-2.426-5.222 0-1.963.852-3.537 2.574-4.722 1.481-1.037 3.407-1.334 5-.76zM150.06 135.24l-.575.777 6.5 4.63c3.575 2.555 6.593 4.685 6.723 4.778.278.166 1.5-1.5 1.26-1.704-.52-.463-13.057-9.278-13.186-9.278-.093 0-.408.352-.723.796zM147.356 140.184c-1.76.444-3.426 1.796-4.315 3.555-.445.852-.519 1.204-.519 2.556 0 1.926.463 2.963 1.908 4.315 1.315 1.222 2.389 1.685 4 1.685 1.555.019 2.944-.556 4.204-1.722 1.296-1.185 1.87-2.408 1.963-4.204.074-1.333.018-1.648-.39-2.537-.629-1.408-1.629-2.426-2.98-3.093-1.279-.63-2.723-.833-3.871-.555zm2.222 2.13c1.24.37 2.74 1.925 2.963 3.11.389 1.834-.463 3.538-2.167 4.445-.833.445-1.166.519-1.889.426-2.889-.315-4.815-3.333-3.685-5.76.445-.962 1.445-1.907 2.352-2.222.944-.333 1.296-.333 2.426 0zM135.689 144.35c-.37.26-.685.556-.685.667 0 .093.648 1.148 1.444 2.352.796 1.185 1.5 2.26 1.556 2.352.092.13-.278.185-1.056.13-1.426-.093-2.76.444-4.019 1.592-1.277 1.185-1.722 2.241-1.722 4.111 0 1.334.074 1.723.5 2.593.945 1.908 2.74 3.296 4.722 3.611 1.075.167 2.89-.333 4.075-1.11 1.13-.742 1.87-1.779 2.185-3.02l.222-.851.445.685c.24.37.5.685.592.685.204 0 1.611-.963 1.593-1.093-.019-.222-8.778-13.055-8.963-13.111-.111-.037-.5.148-.89.407zm3.61 7.797c.445.296 1.038.963 1.353 1.463.481.778.555 1.074.555 2.222 0 1.13-.074 1.426-.5 2.093-1.5 2.24-4.685 2.389-6.426.278-.74-.89-1.203-2.408-1.037-3.39.463-2.759 3.815-4.24 6.056-2.666zM60.798 149.776c-3.334 1.186-5.148 5.26-3.685 8.26.555 1.111 1.703 2.278 2.926 2.907.63.334 1.11.426 2.222.445.796 0 1.444.018 1.444.037 0 .018-.74 1.185-1.666 2.574-.908 1.408-1.667 2.593-1.667 2.648 0 .148 1.667 1.204 1.74 1.111.297-.314 8.816-13.518 8.816-13.648 0-.148-1.352-1.148-1.556-1.148-.055 0-.278.333-.5.74l-.426.741-.333-1.092c-.87-2.815-4.482-4.593-7.315-3.575zm4.093 2.334c1.759 1.037 2.407 3 1.592 4.889-.5 1.148-1.722 2.333-2.74 2.648-1.556.463-3.408-.296-4.445-1.796-.408-.593-.5-.926-.5-1.926 0-1.37.333-2.204 1.26-3.148 1.351-1.39 3.166-1.649 4.833-.667zM74.261 156.054c-.26.037-.778.149-1.167.26-.777.203-.796.315-.314 1.555.166.426.222.445.574.26.666-.352 2.426-.241 3.426.203 1.722.741 2.648 2.093 2.667 3.778 0 .778-.038.87-.315.778-.186-.074-2.204-.852-4.482-1.722-4.704-1.834-4.407-1.834-4.833.13-.593 2.796.722 5.277 3.444 6.518 1.352.611 3.537.574 4.797-.074 1.148-.593 2.389-1.908 2.907-3.074.463-1.056.63-3 .352-4.056-.315-1.13-1.278-2.463-2.37-3.222-1.315-.908-3.39-1.5-4.686-1.334zm1.093 7c1.833.704 3.352 1.352 3.352 1.427 0 .314-1.093 1.351-1.76 1.648-1 .463-2.037.426-3.148-.093-1.074-.5-1.444-.87-1.852-1.833-.296-.704-.389-2.611-.11-2.5.073.018 1.666.63 3.518 1.352zM123.837 156.11c-1.556.389-3.167 1.463-4.038 2.648-.703.982-.685 1.297.149 1.685.685.334.703.334.981-.092 1.074-1.648 2.408-2.39 4.24-2.39.927 0 1.408.112 1.945.427.667.37 1.575 1.333 1.39 1.481-.038.037-2.02.852-4.39 1.797-4.926 2-4.703 1.759-3.444 3.666 1.611 2.445 4.481 3.26 7.148 2.019 1.315-.593 2.185-1.37 2.852-2.574.482-.889.537-1.148.537-2.648 0-1.445-.074-1.797-.518-2.723-.63-1.259-1.704-2.389-2.852-2.944-.945-.463-2.87-.63-4-.352zm5.426 6.204c0 2.185-1.667 3.815-3.87 3.796-1.149-.018-2.816-1-3.02-1.815-.036-.148 1.13-.722 3.278-1.61 1.834-.76 3.39-1.371 3.482-1.371.074-.019.13.444.13 1zM114.966 159.129c-.648.148-.889.277-.889.518 0 .185.296 1.593.648 3.13.704 3.037.797 4.13.39 5.055-.334.797-1.242 1.556-2.205 1.834-.426.111-.796.222-.833.24-.148.112.426 1.945.611 1.945.908 0 2.648-1.185 3.167-2.13l.352-.666.203.796c.186.796.204.796 1 .76.445-.02.89-.13.982-.223.13-.13-.222-2.018-1.074-5.852-.704-3.111-1.334-5.63-1.39-5.63-.055.019-.48.111-.962.223zM87.428 160.962c-.666 1.574-3.537 8.074-4.815 10.982-.722 1.63-1.315 3.018-1.315 3.11 0 .075.482.13 1.056.094l1.056-.056 2.61-5.89c1.427-3.221 2.649-5.87 2.705-5.87.055 0 .777 2.852 1.61 6.315.816 3.482 1.52 6.352 1.556 6.37.037.038.5.093 1.037.13l1 .056 2.704-5.982c1.982-4.352 2.76-5.889 2.852-5.648.074.185.76 3.037 1.537 6.334.76 3.315 1.426 6.037 1.463 6.074.185.185 2.148.278 2.148.111 0-.111-.666-3.019-1.481-6.463-.815-3.445-1.482-6.39-1.482-6.519 0-.11.223-.222.482-.222.278 0 .704-.222 1.037-.556.463-.481.537-.666.444-1.166-.166-.89-.759-1.297-1.685-1.148-.407.074-1.333.13-2.056.11l-1.314-.018-2.649 5.926c-1.463 3.26-2.666 5.908-2.703 5.87-.019-.018-.723-2.833-1.537-6.24-.834-3.408-1.612-6.26-1.741-6.334-.111-.074-.667-.148-1.204-.148-.981 0-.981 0-1.315.778z" />
    </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);