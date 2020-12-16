import Head from 'next/head';
import Link from 'next/link';
function Home(){
	return(
		<div> 
			<Head>
				<title>Bem vindo!</title>
			</Head>
			<header>
				BRAGA E SILVA
				<nav>
					<ul class="nav-links">

						<li>
							<Link href="/jogos">  
								<a>Jogos</a> 
							</Link>
						</li>

						<li>
							<Link href="/sites">  
								<a>Sites</a> 
							</Link>
						</li>

						<li>
							<Link href="/sobre">  
								<a>Sobre</a> 
							</Link>
						</li>
						
					</ul>
				</nav>
				<Link href="/contato">
					<button>Contato</button>
				</Link>
			</header>
		</div>
	)
}

export default Home