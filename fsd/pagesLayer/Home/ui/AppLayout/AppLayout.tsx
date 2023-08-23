import { DirProvider } from '@/shared/lib/context/DirContext/DirContext';
import { Footers } from '../FooterWrapper';
import { Headers } from '../HeaderWrapper';

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<DirProvider>
			<Headers />
			{children}
			<Footers />
		</DirProvider>
	</>
);
