#![no_std]

extern crate alloc;
use solana_program::{account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey};

entrypoint!(process_instruction);

pub fn process_instruction(_program_id: &Pubkey, _accounts: &[AccountInfo], _data: &[u8]) -> ProgramResult {
    msg!("Hello Roxa from Solana program!");
    Ok(())
}

