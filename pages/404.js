import globalStyles from '../styles/404s.js'
export default function Custom404(){
    const responses = ['amigo', 'meu amigo', 'meu consagrado', 'meu parceiro']
    const index = Math.floor(Math.random()*responses.length)
    const vocative = responses[index];
    return(
        <div>
            <div className="wrap404">
                <div className="ildiv">
                    <h1>404</h1>
                    <h2>Essa página não existe não, {vocative}.</h2>
                </div>
                <style jsx>
                    {globalStyles}
                </style>
            </div>
        </div>
    )
}