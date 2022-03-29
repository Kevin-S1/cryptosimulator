using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CryptoSimulator.Migrations
{
    public partial class AddedSoldonAsset : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Sold",
                table: "Assets",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sold",
                table: "Assets");
        }
    }
}
