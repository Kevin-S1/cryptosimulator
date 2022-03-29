using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CryptoSimulator.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PriceHistories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<float>(type: "real", nullable: false),
                    Date = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PriceHistories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Coins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    askPrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    at = table.Column<int>(type: "int", nullable: false),
                    baseAsset = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    bidPrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    highPrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lastPrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lowPrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    openPrice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    quoteAsset = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    symbol = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    volume = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PriceHistoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coins", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Coins_PriceHistories_PriceHistoryId",
                        column: x => x.PriceHistoryId,
                        principalTable: "PriceHistories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Coins_PriceHistoryId",
                table: "Coins",
                column: "PriceHistoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Coins");

            migrationBuilder.DropTable(
                name: "PriceHistories");
        }
    }
}
