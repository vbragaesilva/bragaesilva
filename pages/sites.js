import Head from 'next/head';
import Link from 'next/link';
function Sites(){
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
				<h2>Sites</h2>
				<p>Abaixo estão alguns</p>
				<p> sites interessantes</p>
				
			</div>
		</div>
	)
}

export default Sites