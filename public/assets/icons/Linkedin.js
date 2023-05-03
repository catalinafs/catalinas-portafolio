import * as React from "react";
const Linkedin = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        style={{
            fill: "#000",
        }}
        viewBox="0 0 255.99 255.99"
        {...props}
    >
        <g
            fill="none"
            strokeMiterlimit={10}
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            style={{
                mixBlendMode: "normal",
            }}
            textAnchor="none"
        >
            <path
                fill={props.fill || '#a7a7a7'}
                d="M224 197.333c0 14.73-11.936 26.667-26.667 26.667H58.667C43.94 224 32 212.064 32 197.333V58.667C32 43.936 43.941 32 58.667 32h138.666C212.063 32 224 43.936 224 58.667z"
            />
            <path
                fill="#000"
                d="M160 197.333v-53.861c0-9.008-4.368-14.39-11.69-14.39-4.347 0-7.542 2.449-9.489 7.275-.09.342-.218 1.734-.165 5.942l.01 55.034h-37.333V96h37.334v5.659c5.45-3.76 12.133-5.66 19.936-5.66 24.25 0 38.725 16.497 38.725 44.129l.005 57.205zm-101.333 0V96h18.437c-10.683 0-18.437-7.85-18.437-18.672 0-10.81 7.882-18.661 18.741-18.661 10.73 0 18.373 7.632 18.592 18.554C96 88.123 88.112 96 77.253 96H96v101.333z"
                opacity={0.05}
            />
            <path
                fill="#000"
                d="M162.667 194.667v-51.195c0-10.523-5.5-17.056-14.358-17.056-6.906 0-10.32 4.864-11.962 8.944-.438 1.061-.38 5.275-.358 7.072l.01 52.235h-32v-96h32v8.736c4.24-4.39 11.068-8.736 22.604-8.736 22.576 0 36.058 15.498 36.058 41.46l.006 54.54zm-101.334 0v-96h32v96zM77.104 93.333c-9.136 0-15.77-6.73-15.77-16.005 0-9.27 6.762-15.995 16.074-15.995 9.195 0 15.739 6.555 15.925 15.942 0 9.328-6.762 16.058-16.08 16.058z"
                opacity={0.07}
            />
            <path
                // fill="#000000"
                // fill="#ffffff00"
                // fill="#239423"
                d="M64 101.333h26.667V192H64zm13.253-10.666h-.149C69.147 90.667 64 84.736 64 77.328 64 69.76 69.307 64 77.408 64c8.112 0 13.11 5.76 13.259 13.328 0 7.403-5.147 13.339-13.414 13.339zM192 192h-26.667v-48.528c0-11.723-6.533-19.723-17.024-19.723-8.005 0-12.336 5.398-14.437 10.614-.768 1.866-.539 7.029-.539 9.637v48h-26.666v-90.667h26.666v13.952c3.846-5.952 9.867-13.952 25.27-13.952 19.082 0 33.392 12 33.392 38.795L192 192z"
            />
        </g>
    </svg>
)
export default Linkedin;
