import React, { FC } from 'react';

import { Image } from 'react-bootstrap';
// @ts-ignore
import Fade from 'react-reveal/Fade';

import CustomModal from '../../../../utils/CustomModal';
import { WordType } from '../../../types';
import { wordMin, charMin, checkAccuracy } from '../../counter/function/calculations';

interface Props {
	show: boolean;
	results: WordType[];
}

const ShowResults: FC<Props> = ({ show, results }) => {
  const body = `Well... you typed with the speed of ${wordMin(results)} WPM (${charMin(results)} CPM). Your accuracy was ${checkAccuracy(results)}%.`;

  return (
		<div>
			{show &&
        <div className='mt-3'>
					<Fade top>
						<CustomModal
							btnText={'Show results'}
							title={<h3>Results</h3>}
							reloadOnClose={true}
							body={
								<>
									<Image fluid src='/assets/wow.gif' />
									<p className='fs-5 mt-3'>
										{body}
									</p>
								</>
							}
						/>
					</Fade>
				</div>
			}
		</div>

  );
};

export default ShowResults;
