import { Footers } from '../FooterWrapper';
import { Headers } from '../HeaderWrapper';

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<Headers />
		{children}
		<Footers />
	</>
);
