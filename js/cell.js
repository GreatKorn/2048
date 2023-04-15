export class Cell {
    constructor (gridElement, x, y) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    linkTitle(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;
    }

    unlinkTile() {
        this.linkTitle = null;
    }


    isEmpty() {
        return !this.linkedTile;
    }

    linkTileForMerge(tile) {
        tile.setXY(this.x, this.y);
        this.linkTileForMerge = tile;
    }
}