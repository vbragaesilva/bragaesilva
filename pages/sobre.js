import Head from 'next/head';
import Link from 'next/link';
function Sobre(){
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
							<Link href="/">  
								<a class="as">Home</a> 
							</Link>
						</li>

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
						
					</ul>
				</nav>
				<Link href="/contato">
					<button>Contato</button>
				</Link>
			</header>
			<div class="bv">
				<h2>Sobre</h2>
				<p>Nome: Vinícius Braga e Silva</p>
				<p>Nascimento: 01/01/2001</p>
				<p>Profissão: Estudante 0_0</p>
				<p>Redes: ...</p>
			</div>
		</div>
	)
}

export default Sobre