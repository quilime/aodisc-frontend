const AodLogo = (props: any) => (
    <>
    <style jsx>{`
        .aod-logo {
            margin:0 auto 1em auto;
            max-width:300px;
            max-height:300px;
        }
        .aod-logo-svg-clip div {
            -webkit-clip-path: url(#aod-logo);
            clip-path: url(#aod-logo);
        }
        .aod-logo-svg-defs {
            position: absolute;
            width: 0;
            height: 0;
        }
        .aod-logo-grad1 {
            background: linear-gradient(-80deg,
                #B4939B, #B9979D, #AD9B6C, #FFFFEC, #A89763,
                #9C9A9E, #C7945E, #ffffff, #DCCD72, #9B8F9D
            );
            background-size: 1600% 1600%;
        }
        .aod-logo-anim {
            height:400px;
            width:400px;
            animation: logoGrad 33s ease infinite;
            transition: 0.5s all;
        }
        @keyframes logoGrad {
            0% { background-position:99% 0% }
            50% { background-position:2% 100% }
            100% { background-position:99% 0% }
        }
    `}</style>
    <div className="aod-logo">
        <svg className="aod-logo-svg-defs" viewBox="0 0 400 400" >
            <defs>
                <clipPath id="aod-logo">
                    <path fillRule="evenodd" clipRule="evenodd" d="M136.5,221.9v6.4h60.1c22.4,0,40.7-18.4,40.7-40.7c0-22.4-18.4-40.7-40.7-40.7h-8.7v6.4h8.7c18.9,0,34.3,15.4,34.3,34.3c0,18.9-15.4,34.3-34.3,34.3h-39.1c-2.4,0-4.3-1.9-4.3-4.3v-29.7h-6.4v29.7c0,2.3-1.8,4.2-4.1,4.3H136.5z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M150.1,300C67.3,300,0,232.7,0,150.1C0,67.3,67.3,0,150.1,0s150.1,67.3,150.1,150.1C299.9,232.7,232.5,300,150.1,300z M150.1,6.4C70.8,6.4,6.4,70.8,6.4,150.1c0,79.1,64.4,143.5,143.7,143.5s143.7-64.4,143.7-143.5C293.5,70.8,229.1,6.4,150.1,6.4z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M150.1,191.7c-22.9,0-41.8-18.6-41.8-41.8c0-22.9,18.6-41.8,41.8-41.8c22.9,0,41.8,18.6,41.8,41.8C191.6,173,172.9,191.7,150.1,191.7z M150.1,114.7c-19.4,0-35.4,15.7-35.4,35.4c0,19.4,15.7,35.4,35.4,35.4s35.4-15.7,35.4-35.4C185.2,130.7,169.5,114.7,150.1,114.7z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M150.1,171.1l3.3-14.3c0.3-1,1.3-2.1,1.3-2.1s1.1-1.1,2.1-1.3l14.3-3.3l-14.3-3.3c-1-0.3-2.1-1.3-2.1-1.3s-1.1-1.1-1.3-2.1l-3.3-14.3l-3.3,14.3c-0.3,1-1.3,2.1-1.3,2.1s-1.1,1.1-2.1,1.3L129,150l14.3,3.3c1,0.3,2.1,1.3,2.1,1.3s1.1,1.1,1.3,2.1L150.1,171.1z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M78.2,163.6h-6.4v-60.2c0-22.4,18.4-40.7,40.7-40.7s40.7,18.4,40.7,40.7v8.7h-6.4v-8.7c0-18.9-15.4-34.3-34.3-34.3s-34.3,15.4-34.3,34.3v39.1c0,2.4,1.9,4.3,4.3,4.3h29.7v6.4H82.5c-2.3,0-4.2,1.8-4.3,4.1V163.6z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M112.2,146.8l11,3.2l-11,3.2V146.8z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M153.3,112.1l-3.2,11l-3.2-11H153.3z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M188,153.2l-11-3.2l11-3.2V153.2z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M146.9,187.9l3.2-11l3.2,11H146.9z"/>
                </clipPath>
            </defs>
        </svg>
        <div className="aod-logo-svg-clip" >
            <div className="aod-logo-anim aod-logo-grad1" ></div>
        </div>
    </div>
    </>
)

export default AodLogo
