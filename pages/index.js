import Head from 'next/head';
import Link from 'next/link';
function Home(){

	function rec(){
		window.location.href = '/';
	}

	return(
		<div> 
			<Head>
				<title>Braga e Silva</title>
			</Head>
			<header>
				<h1 class="tit" onClick={rec}>BRAGA E SILVA</h1>
				
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
			<div class="bv">
				<h2>Bem vindo!</h2>
				<p>Este é o meu site.</p>
				<p>Você pode encontrar coisas</p>
				<p> interessantes para fazer </p>
				<p>no cabeçalho.</p>
			</div>
		</div>
	)
}

export default Home