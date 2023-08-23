import { ReactNode, createContext, useState } from 'react';

interface DirContextType {
	dir: string;
	setDir: (value: string) => void;
	language: string;
	setLanguage: (value: string) => void;
}

export const DirContext = createContext<DirContextType>({
	dir: 'ltr',
	setDir() {},
	language: 'en',
	setLanguage() {},
});

export const DirProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState('en');
	const [dir, setDir] = useState('ltr');

	return (
		<DirContext.Provider
			value={{
				dir,
				setDir,
				language,
				setLanguage,
			}}
		>
			{children}
		</DirContext.Provider>
	);
};
