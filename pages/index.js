import dynamic from 'next/dynamic'

const Index = dynamic(
	() =>
		import('../components/index').then(mod => mod.Index),
	{ ssr: false },
);

export default Index;