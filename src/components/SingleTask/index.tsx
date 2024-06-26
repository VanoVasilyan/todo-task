import React, { FC } from 'react';
import { SingleTaskProps } from './types';

const SingleTask: FC<SingleTaskProps> = ({ id, title, description, deadline, status }) => {
    return (
        <div>{title}</div>
    )
}

export default SingleTask
