import Head from 'next/head';
import Link from 'next/link';
function Jogos(){
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
				<h2>Jogos</h2>
				<p>Veja alguns dos</p>
				<p>meus jogos abaixo</p>
			</div>
		</div>
	)
}

export default Jogos