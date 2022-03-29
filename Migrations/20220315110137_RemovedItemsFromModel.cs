using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CryptoSimulator.Migrations
{
    public partial class RemovedItemsFromModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coins_PriceHistories_PriceHistoryId",
                table: "Coins");

            migrationBuilder.DropIndex(
                name: "IX_Coins_PriceHistoryId",
                table: "Coins");

            migrationBuilder.DropColumn(
                name: "PriceHistoryId",
                table: "Coins");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PriceHistoryId",
                table: "Coins",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Coins_PriceHistoryId",
                table: "Coins",
                column: "PriceHistoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Coins_PriceHistories_PriceHistoryId",
                table: "Coins",
                column: "PriceHistoryId",
                principalTable: "PriceHistories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
