const HeaderSeparatorLines = () => {
    return (
        <svg width="119" height="24" viewBox="0 0 119 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="77" y2="2" stroke="#EF4444" stroke-width="4" stroke-linecap="round" />
            <line x1="42" y1="22" x2="117" y2="22" stroke="#EF4444" stroke-width="4" stroke-linecap="round" />
        </svg>
    )
}

const Elipse = {
    A: ({ className }) => (
        <svg className={className} width="946" height="946" viewBox="0 0 946 946" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="473" cy="473" r="473" fill="#CADBEE" />
        </svg>


    ),
    B: ({ className }) => (
        <svg className={className} width="830" height="830" viewBox="0 0 830 830" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="415" cy="415" r="415" fill="#CADBEE" />
        </svg>



    ),
    C: ({ className }) => (
        <svg className={className} width="712" height="712" viewBox="0 0 712 712" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="356" cy="356" r="356" fill="#CADBEE" />
        </svg>


    ),
    D: ({ className }) => (
        <svg className={className} width="594" height="594" viewBox="0 0 594 594" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="297" cy="297" r="297" fill="#CADBEE" />
        </svg>


    ),
    E: ({ className }) => (
        <svg className={className} width="488" height="488" viewBox="0 0 488 488" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="244" cy="244" r="244" fill="#CADBEE" />
        </svg>



    ),
    F: ({ className }) => (
        <svg className={className} width="368" height="368" viewBox="0 0 368 368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="184" cy="184" r="184" fill="#CADBEE" />
        </svg>

    ),
    G: ({ className }) => (
        <svg className={className} width="244" height="244" viewBox="0 0 244 244" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.1" cx="122" cy="122" r="122" fill="#CADBEE" />
        </svg>


    )
}

const UBoat = ({ style, className }) => (
    <svg style={{ ...style }} className={className} width="200vw" height="70vh" viewBox="0 0 4528 896" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_72_34)">
            <path d="M4330.75 148.304H4279.85L4289.34 121.029L4287.61 98.8689L4281.58 74.1517L4260.01 70.7424L4257.42 25.5695C4306.59 17.8986 4330.75 57.9577 4330.75 72.4472V148.304Z" fill="#FCEC62" />
            <path d="M4273.81 75.004H4254.83L4252.24 49.4344H4273.81C4293.83 49.4344 4306.59 65.6285 4306.59 74.1517V148.303H4279.85V84.3795C4279.85 77.561 4275.82 75.2881 4273.81 75.004Z" fill="#F6CB57" />
            <rect x="4120.25" y="1.70447" width="146.662" height="93.755" rx="46.8775" fill="#FCEC62" />
            <rect x="4120.25" y="1.70447" width="146.662" height="93.755" rx="46.8775" fill="#FCEC62" />
            <rect x="4120.25" y="1.70447" width="146.662" height="93.755" rx="46.8775" fill="#FCEC62" />
            <rect x="4120.25" y="1.70447" width="94.8991" height="93.755" rx="46.8775" fill="#F6CB57" />
            <rect x="4120.25" y="1.70447" width="94.8991" height="93.755" rx="46.8775" fill="#F6CB57" />
            <rect x="4118.52" width="148.388" height="98.869" rx="49.4345" fill="#FCEC62" />
            <path d="M4118.52 49.4344H4266.91V49.4344C4266.91 76.7364 4244.78 98.8689 4217.47 98.8689H4167.96C4140.65 98.8689 4118.52 76.7364 4118.52 49.4344V49.4344Z" fill="#F6CB57" />
            <rect x="4128.87" y="10.2278" width="77.6447" height="76.7087" rx="38.3543" fill="#568DEE" />
            <rect x="4137.5" y="18.751" width="60.3904" height="59.6623" rx="29.8311" fill="#532CB8" />
            <path d="M4167.7 48.582C4148.72 48.582 4140.09 64.7761 4140.09 64.7761C4140.09 64.7761 4146.13 80.9701 4167.7 80.9701C4189.26 80.9701 4195.3 64.7761 4195.3 64.7761C4195.3 64.7761 4186.68 48.582 4167.7 48.582Z" fill="#5B8EE1" />
            <path d="M4496.39 340.075C4485.18 320.472 4476.55 315.358 4467.06 315.358H4432.55L4417.02 324.733C4417.6 346.61 4419.27 393.089 4421.34 403.999C4423.92 417.636 4425.65 419.341 4433.41 429.569C4441.18 439.796 4482.59 446.615 4506.75 430.421C4526.07 417.466 4524 396.612 4520.55 387.805L4496.39 340.075Z" fill="#F6CB57" />
            <path d="M4496.86 288.322C4485.33 308.412 4476.47 313.653 4466.71 313.653L4431.25 313.653L4415.3 304.045C4415.89 281.625 4417.6 233.99 4419.73 222.809C4422.39 208.833 4424.16 207.086 4432.14 196.604C4440.12 186.122 4482.67 179.134 4507.49 195.73C4527.35 209.008 4525.23 230.379 4521.68 239.406L4496.86 288.322Z" fill="#FCEC62" />
            <path d="M4497.43 287.108C4486.35 306.858 4477.75 312.051 4468.25 312.119L4433.72 312.365L4418.11 303.068C4418.52 281.113 4442.9 271.89 4442.9 271.89L4504.16 271.037L4497.43 287.108Z" fill="#F6CB57" />
            <rect x="4037.43" y="189.215" width="427.909" height="250.582" rx="125.291" fill="#F6CB57" />
            <rect x="4216.87" y="434.682" width="194.975" height="95.4597" rx="47.7298" fill="#F6CB57" />
            <rect x="4018.45" y="434.682" width="191.524" height="95.4597" rx="47.7298" fill="#F6CB57" />
            <rect x="4327.3" y="477.298" width="70.743" height="10.2278" rx="5.11391" fill="#FCEC63" />
            <rect x="4166.83" y="141.485" width="212.229" height="93.755" rx="46.8775" fill="#FCEC62" />
            <rect x="4166.83" y="141.485" width="139.761" height="93.755" rx="46.8775" fill="#F6CB57" />
            <rect x="4306.59" y="148.303" width="39.6851" height="11.9325" rx="5.96623" fill="#F1F1F1" />
            <rect x="4084.01" y="189.215" width="360.617" height="165.35" rx="82.6749" fill="#FCEC62" />
            <rect x="4297.97" y="202.852" width="84.5465" height="13.6371" rx="6.81855" fill="#F1F1F1" />
            <ellipse cx="4183.13" cy="335.909" rx="164.455" ry="146.524" fill="#F6CB57" />
            <ellipse cx="4066.76" cy="482.412" rx="48.3123" ry="47.7298" fill="#FCEC63" />
            <ellipse cx="4058.13" cy="482.413" rx="41.4105" ry="40.9113" fill="#F1F1F1" />
            <path d="M4058.99 482.412C4038.29 482.412 4032.25 498.606 4032.25 498.606C4033.11 500.311 4040.88 511.391 4058.99 511.391C4073.49 511.391 4082.29 502.868 4084.88 498.606C4084.88 498.606 4079.7 482.412 4058.99 482.412Z" fill="#C3F5FC" />
            <ellipse cx="4166.83" cy="335.814" rx="148.388" ry="146.599" fill="#532DB9" />
            <ellipse cx="4166.83" cy="335.814" rx="117.33" ry="115.915" fill="#8BE2F3" />
            <path d="M4267.77 393.771C4267.77 393.771 4256.81 373.202 4236.31 358.323C4215.82 343.445 4190.99 335.548 4165.56 335.82C4140.13 336.093 4115.48 344.521 4095.32 359.835C4075.16 375.149 4066.45 394.088 4065.9 393.771L4098.68 438.944L4166.83 451.729L4234.99 432.978L4267.77 393.771Z" fill="#B3EBF5" />
            <path d="M4163.38 219.898C4183.23 220.182 4229.3 228.933 4254.83 261.662" stroke="#F1F1F1" stroke-width="20" stroke-linecap="round" />
            <path d="M4085.74 415.931C4111.28 448.661 4143.54 451.445 4163.38 451.729C4186.68 451.729 4237.75 443.547 4255.69 410.818" stroke="#F1F1F1" stroke-width="20" stroke-linecap="round" />
            <ellipse cx="4266.91" cy="482.412" rx="48.3123" ry="47.7298" fill="#FCEC63" />
            <ellipse cx="4258.28" cy="482.413" rx="41.4105" ry="40.9113" fill="#F1F1F1" />
            <path d="M4259.15 482.412C4238.44 482.412 4232.4 498.606 4232.4 498.606C4233.26 500.311 4241.03 511.391 4259.15 511.391C4273.64 511.391 4282.44 502.868 4285.03 498.606C4285.03 498.606 4279.85 482.412 4259.15 482.412Z" fill="#C3F5FC" />
            <path opacity="0.1" d="M4300 483.633C4300 452.231 4234.42 444.39 4205.72 441.831L4 75V888L4205.72 523.728C4238.52 521.169 4300 513.491 4300 483.633Z" fill="#EBE645" />
            <path opacity="0.1" d="M3951 483.779C3951 452.395 3883.44 444.558 3853.88 442L4 118V847L3853.88 523.853C3887.66 521.295 3951 513.621 3951 483.779Z" fill="#EBE645" />
        </g>
        <defs>
            <filter id="filter0_d_72_34" x="0" y="0" width="4528" height="896" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_34" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_34" result="shape" />
            </filter>
        </defs>
    </svg>

    // <svg style={{ ...style }} className={className} width="1800.64px" height="601.08px" viewBox="0 0 2687 888" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M2493.75 148.304H2442.85L2452.34 121.029L2450.61 98.8689L2444.58 74.1517L2423.01 70.7424L2420.42 25.5695C2469.59 17.8986 2493.75 57.9577 2493.75 72.4472V148.304Z" fill="#FCEC62" />
    //     <path d="M2436.81 75.004H2417.83L2415.24 49.4344H2436.81C2456.83 49.4344 2469.59 65.6285 2469.59 74.1517V148.303H2442.85V84.3795C2442.85 77.561 2438.82 75.2881 2436.81 75.004Z" fill="#F6CB57" />
    //     <rect x="2283.25" y="1.70447" width="146.662" height="93.755" rx="46.8775" fill="#FCEC62" />
    //     <rect x="2283.25" y="1.70447" width="146.662" height="93.755" rx="46.8775" fill="#FCEC62" />
    //     <rect x="2283.25" y="1.70447" width="146.662" height="93.755" rx="46.8775" fill="#FCEC62" />
    //     <rect x="2283.25" y="1.70447" width="94.8991" height="93.755" rx="46.8775" fill="#F6CB57" />
    //     <rect x="2283.25" y="1.70447" width="94.8991" height="93.755" rx="46.8775" fill="#F6CB57" />
    //     <rect x="2281.52" width="148.388" height="98.869" rx="49.4345" fill="#FCEC62" />
    //     <path d="M2281.52 49.4344H2429.91V49.4344C2429.91 76.7364 2407.78 98.8689 2380.47 98.8689H2330.96C2303.65 98.8689 2281.52 76.7364 2281.52 49.4344V49.4344Z" fill="#F6CB57" />
    //     <rect x="2291.87" y="10.2278" width="77.6447" height="76.7087" rx="38.3543" fill="#568DEE" />
    //     <rect x="2300.5" y="18.751" width="60.3904" height="59.6623" rx="29.8311" fill="#532CB8" />
    //     <path d="M2330.7 48.582C2311.72 48.582 2303.09 64.7761 2303.09 64.7761C2303.09 64.7761 2309.13 80.9701 2330.7 80.9701C2352.26 80.9701 2358.3 64.7761 2358.3 64.7761C2358.3 64.7761 2349.68 48.582 2330.7 48.582Z" fill="#5B8EE1" />
    //     <path d="M2659.39 340.075C2648.18 320.472 2639.55 315.358 2630.06 315.358H2595.55L2580.02 324.733C2580.6 346.61 2582.27 393.089 2584.34 403.999C2586.92 417.636 2588.65 419.341 2596.41 429.569C2604.18 439.796 2645.59 446.615 2669.75 430.421C2689.07 417.466 2687 396.612 2683.55 387.805L2659.39 340.075Z" fill="#F6CB57" />
    //     <path d="M2659.86 288.322C2648.33 308.412 2639.47 313.653 2629.72 313.653L2594.25 313.653L2578.3 304.045C2578.89 281.625 2580.6 233.99 2582.73 222.809C2585.39 208.833 2587.16 207.086 2595.14 196.604C2603.12 186.122 2645.67 179.134 2670.5 195.73C2690.35 209.008 2688.23 230.379 2684.68 239.406L2659.86 288.322Z" fill="#FCEC62" />
    //     <path d="M2660.43 287.108C2649.35 306.858 2640.75 312.051 2631.25 312.119L2596.72 312.365L2581.11 303.068C2581.52 281.113 2605.9 271.89 2605.9 271.89L2667.16 271.037L2660.43 287.108Z" fill="#F6CB57" />
    //     <rect x="2200.43" y="189.215" width="427.909" height="250.582" rx="125.291" fill="#F6CB57" />
    //     <rect x="2379.87" y="434.682" width="194.975" height="95.4597" rx="47.7298" fill="#F6CB57" />
    //     <rect x="2181.45" y="434.682" width="191.524" height="95.4597" rx="47.7298" fill="#F6CB57" />
    //     <rect x="2490.3" y="477.298" width="70.743" height="10.2278" rx="5.11391" fill="#FCEC63" />
    //     <rect x="2329.83" y="141.485" width="212.229" height="93.755" rx="46.8775" fill="#FCEC62" />
    //     <rect x="2329.83" y="141.485" width="139.761" height="93.755" rx="46.8775" fill="#F6CB57" />
    //     <rect x="2469.59" y="148.303" width="39.6851" height="11.9325" rx="5.96623" fill="#F1F1F1" />
    //     <rect x="2247.01" y="189.215" width="360.617" height="165.35" rx="82.6749" fill="#FCEC62" />
    //     <rect x="2460.97" y="202.852" width="84.5465" height="13.6371" rx="6.81855" fill="#F1F1F1" />
    //     <ellipse cx="2346.13" cy="335.909" rx="164.455" ry="146.524" fill="#F6CB57" />
    //     <ellipse cx="2229.76" cy="482.412" rx="48.3123" ry="47.7298" fill="#FCEC63" />
    //     <ellipse cx="2221.13" cy="482.413" rx="41.4105" ry="40.9113" fill="#F1F1F1" />
    //     <path d="M2221.99 482.412C2201.29 482.412 2195.25 498.606 2195.25 498.606C2196.11 500.311 2203.88 511.391 2221.99 511.391C2236.49 511.391 2245.29 502.868 2247.88 498.606C2247.88 498.606 2242.7 482.412 2221.99 482.412Z" fill="#C3F5FC" />
    //     <ellipse cx="2329.83" cy="335.814" rx="148.388" ry="146.599" fill="#532DB9" />
    //     <ellipse cx="2329.83" cy="335.814" rx="117.33" ry="115.915" fill="#8BE2F3" />
    //     <path d="M2430.77 393.771C2430.77 393.771 2419.81 373.202 2399.31 358.323C2378.82 343.445 2353.99 335.548 2328.56 335.82C2303.13 336.093 2278.48 344.521 2258.32 359.835C2238.16 375.149 2229.45 394.088 2228.9 393.771L2261.68 438.944L2329.83 451.729L2397.99 432.978L2430.77 393.771Z" fill="#B3EBF5" />
    //     <path d="M2326.38 219.898C2346.23 220.182 2392.3 228.933 2417.83 261.662" stroke="#F1F1F1" stroke-width="20" stroke-linecap="round" />
    //     <path d="M2248.74 415.931C2274.27 448.661 2306.54 451.445 2326.38 451.729C2349.68 451.729 2400.75 443.547 2418.69 410.818" stroke="#F1F1F1" stroke-width="20" stroke-linecap="round" />
    //     <ellipse cx="2429.91" cy="482.412" rx="48.3123" ry="47.7298" fill="#FCEC63" />
    //     <ellipse cx="2421.28" cy="482.413" rx="41.4105" ry="40.9113" fill="#F1F1F1" />
    //     <path d="M2422.15 482.412C2401.44 482.412 2395.4 498.606 2395.4 498.606C2396.26 500.311 2404.03 511.391 2422.15 511.391C2436.64 511.391 2445.44 502.868 2448.03 498.606C2448.03 498.606 2442.85 482.412 2422.15 482.412Z" fill="#C3F5FC" />
    //     <path opacity="0.1" d="M2463.2 483.809C2463.2 452.422 2425.6 444.584 2409.15 442.026L0 75.3545V888L2409.15 523.887C2427.95 521.329 2463.2 513.654 2463.2 483.809Z" fill="#EBE645" />
    //     <path opacity="0.1" d="M2262.79 483.694C2262.79 452.335 2224.06 444.504 2207.12 441.948L0 118.203V846.629L2207.12 523.736C2226.48 521.18 2262.79 513.513 2262.79 483.694Z" fill="#EBE645" />
    // </svg>
)

export default {
    HeaderSeparatorLines,
    Elipse,
    UBoat,
    Line: ({ className }) => (
        <svg className={className} width="79" height="4" viewBox="0 0 79 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="77" y2="2" stroke="#EF4444" stroke-width="4" stroke-linecap="round" />
        </svg>
    ),
    FullElipse: ({ className }) => {
        return (
            <svg className={className} width="100.3vw" height="100.3vh" px viewBox="0 0 946 946" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="473" cy="473" r="473" fill="#CADBEE" />
                <circle opacity="0.1" cx="473" cy="473" r="415" fill="#CADBEE" />
                <circle opacity="0.1" cx="473" cy="473" r="356" fill="#CADBEE" />
                <circle opacity="0.1" cx="473" cy="473" r="297" fill="#CADBEE" />
                <circle opacity="0.1" cx="473" cy="473" r="244" fill="#CADBEE" />
                <circle opacity="0.1" cx="473" cy="473" r="184" fill="#CADBEE" />
                <circle opacity="0.1" cx="473" cy="473" r="122" fill="#CADBEE" />
            </svg>

        )
    },
    justNGeng: ({className, style}) => {
        return (
            <svg className={className} style={style} width="340" height="359" viewBox="0 0 340 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M210.427 100.372H176.393L182.738 81.9128L181.585 66.9147L177.547 50.186L163.126 47.8786L161.395 17.3055C194.276 12.1138 210.427 39.2259 210.427 49.0325V100.372Z" fill="#FCEC62" />
                <path d="M172.355 50.7628H159.665L157.934 33.4573H172.355C185.738 33.4573 194.276 44.4174 194.276 50.1859V100.372H176.393V57.1082C176.393 52.4934 173.701 50.9551 172.355 50.7628Z" fill="#F6CB57" />
                <rect x="69.6758" y="1.15369" width="98.0646" height="63.4536" rx="31.7268" fill="#FCEC62" />
                <rect x="69.6758" y="1.15369" width="98.0646" height="63.4536" rx="31.7268" fill="#FCEC62" />
                <rect x="69.6758" y="1.15369" width="98.0646" height="63.4536" rx="31.7268" fill="#FCEC62" />
                <rect x="69.6758" y="1.15369" width="63.4536" height="63.4536" rx="31.7268" fill="#F6CB57" />
                <rect x="69.6758" y="1.15369" width="63.4536" height="63.4536" rx="31.7268" fill="#F6CB57" />
                <rect x="68.522" width="99.2183" height="66.9147" rx="33.4573" fill="#FCEC62" />
                <path d="M68.522 33.4573H167.74V33.4573C167.74 51.9353 152.761 66.9146 134.283 66.9146H101.979C83.5014 66.9146 68.522 51.9353 68.522 33.4573V33.4573Z" fill="#F6CB57" />
                <rect x="75.4443" y="6.92224" width="51.9166" height="51.9166" rx="25.9583" fill="#568DEE" />
                <rect x="81.2129" y="12.6907" width="40.3796" height="40.3796" rx="20.1898" fill="#532CB8" />
                <path d="M101.403 32.8805C88.7119 32.8805 82.9434 43.8407 82.9434 43.8407C82.9434 43.8407 86.9813 54.8008 101.403 54.8008C115.824 54.8008 119.862 43.8407 119.862 43.8407C119.862 43.8407 114.093 32.8805 101.403 32.8805Z" fill="#5B8EE1" />
                <path d="M321.183 230.163C313.684 216.896 307.915 213.435 301.57 213.435H278.496L268.112 219.78C268.497 234.586 269.612 266.044 270.997 273.427C272.727 282.657 273.881 283.811 279.072 290.733C284.264 297.655 311.953 302.27 328.105 291.31C341.026 282.542 339.642 268.428 337.334 262.467L321.183 230.163Z" fill="#F6CB57" />
                <path d="M321.493 195.137C313.787 208.734 307.859 212.281 301.339 212.281L277.628 212.281L266.959 205.778C267.354 190.604 268.5 158.365 269.923 150.797C271.701 141.338 272.886 140.156 278.221 133.062C283.556 125.967 312.009 121.238 328.606 132.47C341.884 141.457 340.461 155.921 338.09 162.03L321.493 195.137Z" fill="#FCEC62" />
                <path d="M321.874 194.315C314.465 207.682 308.717 211.197 302.367 211.243L279.276 211.409L268.838 205.117C269.116 190.258 285.418 184.015 285.418 184.015L326.374 183.439L321.874 194.315Z" fill="#F6CB57" />
                <rect x="14.2981" y="128.061" width="286.118" height="169.594" rx="84.7971" fill="#F6CB57" />
                <rect x="134.283" y="294.194" width="130.368" height="64.6073" rx="32.3036" fill="#F6CB57" />
                <rect x="1.60742" y="294.194" width="128.061" height="64.6073" rx="32.3036" fill="#F6CB57" />
                <rect x="208.12" y="323.036" width="47.3018" height="6.92221" rx="3.4611" fill="#FCEC63" />
                <rect x="100.826" y="95.7572" width="141.905" height="63.4536" rx="31.7268" fill="#FCEC62" />
                <rect x="100.826" y="95.7572" width="93.4498" height="63.4536" rx="31.7268" fill="#F6CB57" />
                <rect x="194.275" y="100.372" width="26.5351" height="8.07591" rx="4.03796" fill="#F1F1F1" />
                <rect x="45.448" y="128.061" width="241.124" height="111.909" rx="55.9545" fill="#FCEC62" />
                <rect x="188.507" y="137.29" width="56.5314" height="9.22961" rx="4.61481" fill="#F1F1F1" />
                <ellipse cx="111.719" cy="227.344" rx="109.962" ry="99.1678" fill="#F6CB57" />
                <circle cx="33.9111" cy="326.497" r="32.3036" fill="#FCEC63" />
                <circle cx="28.1425" cy="326.498" r="27.6888" fill="#F1F1F1" />
                <path d="M28.7193 326.498C14.8749 326.498 10.8369 337.458 10.8369 337.458C11.4138 338.611 16.6054 346.11 28.7193 346.11C38.4104 346.11 44.2943 340.342 46.0248 337.458C46.0248 337.458 42.5637 326.498 28.7193 326.498Z" fill="#C3F5FC" />
                <circle cx="100.826" cy="227.279" r="99.2183" fill="#532DB9" />
                <circle cx="100.826" cy="227.279" r="78.4517" fill="#8BE2F3" />
                <path d="M168.317 266.505C168.317 266.505 160.985 252.584 147.283 242.514C133.581 232.444 116.978 227.099 99.9743 227.284C82.9709 227.468 66.4877 233.172 53.0072 243.537C39.5267 253.902 33.7035 266.72 33.3342 266.505L55.2546 297.078L100.826 305.731L146.397 293.04L168.317 266.505Z" fill="#B3EBF5" />
                <path d="M98.5183 148.828C111.786 149.02 142.59 154.942 159.664 177.093" stroke="#F1F1F1" stroke-width="20" stroke-linecap="round" />
                <path d="M46.6016 281.503C63.6764 303.654 85.2506 305.539 98.5182 305.731C114.093 305.731 148.243 300.193 160.241 278.042" stroke="#F1F1F1" stroke-width="20" stroke-linecap="round" />
                <circle cx="167.74" cy="326.497" r="32.3036" fill="#FCEC63" />
                <circle cx="161.972" cy="326.498" r="27.6888" fill="#F1F1F1" />
                <path d="M162.549 326.498C148.704 326.498 144.667 337.458 144.667 337.458C145.243 338.611 150.435 346.11 162.549 346.11C172.24 346.11 178.124 340.342 179.854 337.458C179.854 337.458 176.393 326.498 162.549 326.498Z" fill="#C3F5FC" />
            </svg>

        )
    }
}