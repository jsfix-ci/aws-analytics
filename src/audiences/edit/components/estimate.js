import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import styled from 'styled-components';

import PieChart from './pie-chart';

const { useSelect } = wp.data;
const { __ } = wp.i18n;

const StyledEstimate = styled.div`
	display: flex;
	margin: 0;

	.audience-estimate__error {
		flex: 0 0 100%;
	}

	.audience-estimate__percentage {
		flex: 0 1 100px;
		margin-right: 20px;
	}

	.audience-estimate__totals {
		flex: 2;
	}

	.audience-estimate__totals svg {
		max-width: 220px;
		margin-top: 5px;
		margin-bottom: 10px;
	}

	.audience-estimate__totals p {
		margin: 0;
	}

	.audience-estimate__totals strong {
		margin-right: 2px;
	}
`;

const Estimate = props => {
	const {
		audience,
		sparkline = false,
	} = props;

	if ( ! audience ) {
		return null;
	}

	const estimate = useSelect( select => select( 'audience' ).getEstimate( audience ), [ audience ] );
	const percent = estimate.total ? Math.round( ( estimate.count / estimate.total ) * 100 ) : 0;

	return (
		<StyledEstimate className="audience-estimate" { ...props }>
			<PieChart
				className="audience-estimate__percentage"
				percent={ percent }
			/>
			<div className="audience-estimate__totals">
				{ sparkline && (
					<Sparklines
						className="audience-estimate__sparkline"
						data={ estimate.histogram.map( item => item.count ) }
						preserveAspectRatio="xMidYMid meet"
					>
						<SparklinesLine color="rgb(0, 124, 186)" style={{ strokeWidth: 5 }} />
					</Sparklines>
				) }
				<p className="audience-estimate__count">
					<strong>{ estimate.count }</strong>
					{ ' ' }
					<span>{ __( 'uniques in the last 7 days' ) }</span>
				</p>
			</div>
		</StyledEstimate>
	);
};

export default Estimate;
