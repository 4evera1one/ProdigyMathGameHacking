// @ts-nocheck
import { GameItemKey } from "../../../typings/gameData";
import { Item } from "../../../typings/item";
import { Player } from "../../../typings/player";
import { TODO } from "../../../typings/util";
import { Prodigy } from "../../../typings/prodigy";
import { Game } from "../../../typings/game";
const base: { game: Game, prodigy: Prodigy } = _.instance;
export const game = base.game;
export const prodigy = base.prodigy;
export const gameData = game.state.states.Boot._gameData;
export const getItem = <T extends GameItemKey>(type: T, id: number): Item<T> | null =>
	(gameData[type].find(x => x.ID === id) as null | Item<any>) ?? null;
export const VERY_LARGE_NUMBER = 9e9;

export const saveCharacter = () => {
	_.player.forceSaveCharacter()
	// well fuck that
	/*
	let playerdata = {}
	playerdata.equipment = _.player.equipment
	playerdata.tutorial = _.player.tutorial
	playerdata.pets = _.player.kennel._petData
	playerdata.data = _.player.data
	playerdata.encounters = _.player.encounters._data
	playerdata.house = _.player.house.data
	playerdata.inventory = _.player.backpack.data
	playerdata.quests = _.player.quests.data
	playerdata.state = _.player.state.data
	playerdata.appearance = _.player.appearance
	playerdata.tutorial = _.player.tutorial.data
	fetch(`https://proxy.prodigyhacking.com/api.prodigygame.com/game-api/v3/characters/${_.player.userID}`, {
		"headers": {
			"authorization": localStorage.JWT_TOKEN,
		},
		"referrer": "https://play.prodigygame.com/",
		"body": JSON.stringify(JSON.stringify(playerdata)),
		"method": "POST",
		"mode": "cors"	});
		*/
}

export const assetURL = "https://raw.githubusercontent.com/Prodigy-Hacking/ProdigyMathGameHacking/HEAD/willsCheatMenu/src/assets/";
export const joinAsset = (asset: string) => `${assetURL}${asset}`;
export const locations = {
	academy: joinAsset("academy.png"),
	bonfire_spire: joinAsset("bonfire_spire.png"),
	forest: joinAsset("forest.png"),
	shipwreck_shore: joinAsset("shipwreck_shore.png"),
	shiverchill: joinAsset("shiverchill.png"),
	skywatch: joinAsset("skywatch.png"),
	dyno: joinAsset("dyno.png"),
	elemental_guardian: joinAsset("elemental_guardian.png"),
	darktower: joinAsset("darktower.png"),
	earthtower: joinAsset("earthtower.png"),
	crystal_caverns: joinAsset("crystal_caverns.png"),
	archives: joinAsset("archives.png"),
	house: joinAsset("house.png"),
	toyzone: joinAsset("toyzone.png"),
	tower_town: joinAsset("tower_town.png"),
	lamplight: joinAsset("lamplight.png")
};
export const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];