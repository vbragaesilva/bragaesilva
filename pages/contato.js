import Head from 'next/head';
import Link from 'next/link';
function Contato(){
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

						<li>
							<Link href="/sobre">  
								<a class="as">Sobre</a> 
							</Link>
						</li>
						
					</ul>
				</nav>
			</header>
			<div class="bv">
				<h2>Entre em Contato</h2>
				<p>e-mail: teste@teste.com</p>
				<p>telefone: (12) 99797-7997</p>
				<p>instagram: @ueh_hue</p>
				<p>facebook: Vinícius Braga</p>
                <p>Snapchat: Vini</p>
			</div>
		</div>
	)
}

export default Contato