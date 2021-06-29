using Microsoft.EntityFrameworkCore.Migrations;

namespace Cookify.DataAccess.Migrations
{
    public partial class UpdateDatabaseSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DifficultyLevel",
                table: "Recipe",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PreparationTime",
                table: "Recipe",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Comment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RecipeId",
                table: "Comment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_RecipeId",
                table: "Comment",
                column: "RecipeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Recipe_RecipeId",
                table: "Comment",
                column: "RecipeId",
                principalTable: "Recipe",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Recipe_RecipeId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_RecipeId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "DifficultyLevel",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "PreparationTime",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "RecipeId",
                table: "Comment");
        }
    }
}
