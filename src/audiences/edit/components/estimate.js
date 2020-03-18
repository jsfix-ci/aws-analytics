import React, { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import styled from 'styled-components';

import { getEstimate } from '../data';

const { __ } = wp.i18n;

const StyledEstimate = styled.div`
	display: ${ props => props.horizontal ? 'flex' : 'block' };
	margin: 0 0 ${ props => props.horizontal ? 0 : '20px' };

	.audience-estimate__totals p:last-child {
		margin-bottom: 0;
	}

	.audience-estimate__totals strong {
		font-size: 135%;
		font-weight: normal;
		margin-right: 2px;
	}

	.audience-estimate__totals {
		flex: 1;
	}

	svg {
		flex: 0 0 ${ props => props.horizontal ? '200px' : '100%' };
		width: ${ props => props.horizontal ? '200px' : '100%' };
	}
`;

const Estimate = props => {
	const {
		audience,
		sparkline = true,
	} = props;

	if ( ! audience ) {
		return null;
	}

	const [ loading, setLoading ] = useState( true );

	const [ estimate, setEstimate ] = useState( {
		count: 0,
		total: 0,
		histogram: [],
	} );

	const fetchEstimate = () => {
		( async () => {
			const estimateResponse = await getEstimate( audience );
			setEstimate( estimateResponse );
			setLoading( false );
		} )();
	};

	useEffect( fetchEstimate, [ audience ] );

	if ( loading ) {
		return (
			<p><span className="spinner is-active"></span> { __( 'Loading...', 'altis-analytics' ) }</p>
		);
	}

	return (
		<StyledEstimate className="audience-estimate">
			{ estimate.error && (
				<div className="audience-estimate__error error msg">{ estimate.error.message }</div>
			) }

			<div className="audience-estimate__totals">
				<p className="audience-estimate__count">
					<strong>{ estimate.count }</strong>
					{ ' ' }
					<span>{ __( 'in the last 7 days' ) }</span>
				</p>

				{ estimate.total > 0 && (
					<p className="audience-estimate__percentage">
						<strong>{ Math.round( ( estimate.count / estimate.total ) * 100 ) }%</strong>
						{ ' ' }
						<span>{ __( 'of total traffic', 'altis-analytics' ) }</span>
					</p>
				) }
			</div>

			{ sparkline && estimate.histogram && estimate.histogram.length > 0 && (
				<Sparklines
					className="audience-estimate__sparkline"
					data={ estimate.histogram.map( item => item.count ) }
					preserveAspectRatio="xMidYMid meet"
				>
					<SparklinesLine color="#4667de" />
				</Sparklines>
			) }
		</StyledEstimate>
	);
};

export default Estimate;
