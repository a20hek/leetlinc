import { useRouter } from 'next/router';
import firebase from 'firebase';
import { useEffect, useState } from 'react';

export default function SearchResult() {
	async function Search(query) {
		// const upper = query.toUpperCase();
		// const lower = query.toLowerCase();
		// const FirstLetter = query.charAt(0).toUpperCase() + query.slice(1);

		const snapshot = await firebase
			.firestore()
			.collection('users')
			.where('skills', 'array-contains', query)
			.get();
		const results = [];
		snapshot.forEach((doc) => {
			results.push({ id: doc.id, ...doc.data() });
		});
		return { results };
	}

	const [result, setResult] = useState();

	const router = useRouter();
	const searchreq = router.query.searchResult;
	console.log(Search(searchreq));
	useEffect(() => {
		Search(searchreq).then(({ results }) => setResult(results));
	}, []);
	return (
		<div>
			<h1>Hello World</h1>
			<p>{JSON.stringify(result)}</p>
		</div>
	);
}
