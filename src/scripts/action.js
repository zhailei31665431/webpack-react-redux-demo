
'use strict';

export const MoveScroll = 'MoveScroll';
export function moveScroll(id,top){
	return { type:MoveScroll,id,top}
}

export const ChangeView = 'ChangeView';
export function changeView(id){
	return { type:ChangeView,id}
}