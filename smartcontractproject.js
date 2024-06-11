// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPLMatch {
    enum Team { India, NewZealand, Pakistan }

    uint256 public indiaWins;
    uint256 public newZealandWins;
    uint256 public pakistanWins;

    event UpdationOfWinning(Team team, uint256 Wins);
    event examine(string word);

    function WinningUpdate(Team team, uint256 wins) public {
        require(wins >= 0, "Wins must be postive");

        if (team == Team.India) {
            indiaWins = wins;
        } else if (team == Team.NewZealand) {
            newZealandWins = wins;
        } else if (team == Team.Pakistan) {
            pakistanWins = wins;
        }

        emit UpdationOfWinning(team, wins);
    }

    function checkCompetition() public view {
        require(indiaWins > pakistanWins || newZealandWins > pakistanWins, "Pakistan has more wins than India and New Zealand");

        // Check internal consistency using assert
        assert(indiaWins >= 0 && newZealandWins >= 0 && pakistanWins >= 0);

    }

    function getWins(Team team) public view returns (uint256) {
        if (team == Team.India) {
            return indiaWins;
        } else if (team == Team.NewZealand) {
            return newZealandWins;
        } else if (team == Team.Pakistan) {
            return pakistanWins;
        } else {
            revert("Unknown team");
        }
    }
}
