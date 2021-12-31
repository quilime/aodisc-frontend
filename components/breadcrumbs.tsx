import Link from 'next/link'

const Breadcrumbs = ({ type, item }) => {
    const artifacts = [ "/artifact", "Artifacts" ];
    const collections = [ "/collection", "Collections" ];
    const t = type == "artifact" ? artifacts : collections;
    return (
        <>
        <style jsx>{`
            .breadcrumbs {
                opacity:0.65;
            }
        `}</style>
        <span className="breadcrumbs">
            <Link href="/"><a className="ghosted">home</a></Link>
            {' '}/{' '}
            {item && (
                <Link href={t[0]}><a className="ghosted">{t[1]}</a></Link>
            ) || (
                <span>
                    {t[1]}
                </span>
            )}
            {item && (
                <span>
                {' '}/{' '}
                {item}
                </span>
            )}
        </span>
        </>
    );
};


export default Breadcrumbs;