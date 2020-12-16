import Head from 'next/head';
import Link from 'next/link';
function Home(){
	return(
		<div> 
			<Head>
				<title>Bem vindo!</title>
			</Head>
			<header>
				<h1 class="tit">BRAGA E SILVA</h1>
				<nav>
					<ul class="nav-links">

						<li>
							<Link href="/jogos">  
								<a class="as">Jogos</a> 
							</Link>
						</li>

						<li>
							<Link href="/sites">  
								<a class="as">Sites</a> 
							</Link>
						</li>

						<li>
							<Link href="/sobre">  
								<a class="as">Sobre</a> 
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